import EventBus from "~src/core/EventBus/event-bus";
import { Meta, ComponentEvent, IBlock, Prop } from './types';
import uid from "~/src/libs/uid";

export default abstract class Block implements IBlock {
  private static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };
  public eventBus: Function;
  public componentEmits: Function;
  public props: Prop;

  protected _element: HTMLElement;
  protected _meta: Meta;
  protected _eventHandlers: ComponentEvent = {};

  private _id: string;
  private _children: Record<string, IBlock | IBlock[]>;

  constructor(tagName = "div", props = {}) {
    const eventBus = new EventBus();
    const componentEmits = new EventBus();

    const { children, ownProps } = this._getChildren(props);

    this._children = children;

    this._meta = {
      tagName,
      ownProps,
    };

    this._id = uid();

    this.props = this._makePropsProxy(ownProps);

    this.componentEmits = () => componentEmits;
    this.eventBus = () => eventBus;

    this._registerEvents();
    this.eventBus().emit(Block.EVENTS.INIT);
    this.setProps = this.setProps.bind(this);
  }

  public get element(): HTMLElement {
    return this._element;
  }

  public get id(): string {
    return this._id;
  }

  public getContent(): HTMLElement {
    return this.element;
  }

  private _getChildren(props: Prop): {
    children: Record<string, IBlock | IBlock[]>,
    ownProps: Prop
  } {
    const children: Record<string, IBlock | IBlock[]> = {};
    const ownProps: Prop = {};

    Object.entries(props).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        const childrenArr: Array<IBlock> = [];
        const ownPropsArr: unknown[] = [];

        value.forEach((item) => {
          if (item instanceof Block) {
            childrenArr.push(item);
          } else {
            ownPropsArr.push(item);
          }
        });

        if (childrenArr.length) {
          children[key] = childrenArr;
        }

        if (ownPropsArr.length) {
          ownProps[key] = ownPropsArr;
        }
      }
      else {
        ownProps[key] = value;
      }
    });
    return { children, ownProps };
  }

  public compile(templateCompiler: Function, props?: Prop): DocumentFragment {
    if (typeof props === 'undefined') {
      props = this.props;
    }

    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        child.forEach((item) => {
          if (!propsAndStubs[key]) {
            propsAndStubs[key] = `<div data-id="${item.id}"></div>`;
          } else {
            propsAndStubs[key] += `<div data-id="${item.id}"></div>`;
          }
        });
      } else {
        propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
      }
    });

    const fragment = document.createElement('template');
    fragment.innerHTML = templateCompiler(propsAndStubs);

    Object.values(this._children).forEach((child: IBlock) => {
      const stubs: Array<HTMLTemplateElement | null> = [];
      if (Array.isArray(child)) {
        child.forEach((item) => {
          if (item instanceof Block) {
            stubs.push(fragment.content.querySelector(`[data-id="${item.id}"]`));
          }
        });
      } else {
        stubs.push(fragment.content.querySelector(`[data-id="${child.id}"]`));
      }

      stubs.forEach((stub) => {
        if (stub) {
          if (Array.isArray(child)) {
            child.forEach((item) => {
              stub.before(item.getContent());
            });
          } else {
            stub.replaceWith(child.getContent());
          }
          stub.remove();
        }
      });
    });

    return fragment.content;
  }

  public defineEmits (emits: {[key: string]: Function}) {
    Object.entries(emits).forEach(([emit, callback]) => {
      this.componentEmits().on(emit, callback);
    });
  }
  public addComponentEmmits (): ComponentEvent {
    return {};
  }

  private __removeComponentEvents () {
    Object.entries(this._eventHandlers).forEach(([key, handler]) => {
      this._element.removeEventListener(key, handler);
    });
  }

  private _addEvents () {
    const eventsEmits = this.addComponentEmmits();
    this._eventHandlers = { ...eventsEmits };
    Object.entries(eventsEmits).forEach(([event, callback]) => {
      this._element.addEventListener(event, callback);
    });

    const { events = {} } = this.props;
    Object.entries(events).forEach(([key, handler]) => {
      this._eventHandlers[key] = handler;
      this._element.addEventListener(key, this._eventHandlers[key]);
    });
  }
  private _registerEvents() {
    this.eventBus().on(Block.EVENTS.INIT, this._init.bind(this));
    this.eventBus().on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus().on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus().on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _setAttributes(): void {
    const { tagAttrs = {} } = this._meta.ownProps;

    Object.entries(tagAttrs).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  private _init(): void {
    this._createDocumentElement();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this._children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => item.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  public componentDidMount(): void {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: string, newProps: string): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  public componentDidUpdate(oldProps: string, newProps: string): boolean {
    if (oldProps !== newProps) {
      return true;
    }
    return false;
  }

  public setProps(props: Prop): void {
    if (!props) {
      return;
    }
    const { children, ownProps } = this._getChildren(props);
    Object.assign(this._children, children);
    Object.assign(this.props, ownProps);
  }

  private _render(): void {
    const block = this.render();

    this.__removeComponentEvents();

    this._element.innerHTML = '';
    this._element.append(block);

    this._setAttributes();
    this._addEvents();
  }

  public render(): DocumentFragment | string {
    return '';
  }

  private _makePropsProxy(props: Prop) {
    const self = this;

    return new Proxy(props, {
      get(target: Prop, prop: string) {
        if (prop.startsWith('_')) {
          throw new Error(`Has no access to get ${target[prop]}`);
        }

        return target[prop];
      },

      set(target: Prop, prop: string, newValue) {
        if (prop.startsWith('_')) {
          throw new Error(`Has no access to set ${target[prop]}`);
        }

        const oldValue = target[prop];
        target[prop] = newValue;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, newValue);
        return true;
      },

      deleteProperty(target: Prop, prop: string) {
        if (prop.startsWith('_')) {
          throw new Error(`Has no access to delete ${target[prop]}`);
        }
        return true;
      },
    });
  }
  private _createDocumentElement(): HTMLElement {
    const { tagName } = this._meta;
    this._element = document.createElement(tagName);
    return this._element;
  }

  public show(): void {
    this.element.style.display = 'block';
  }

  public hide(): void {
    this.element.style.display = 'none';
  }
}
