import { TObject } from '~/types';

export type ComponentEvent = {
  [key: string]: EventListenerOrEventListenerObject
}

export type Prop = {
  tagAttrs?: TObject<string>
  events?: ComponentEvent
  [key: string]: unknown
}

export type Meta = {
  tagName: string
  ownProps: Prop
}

export interface IBlock {
  props: Prop
  element: HTMLElement
  id: string
  render(): DocumentFragment | string
  compile(templateCompiler: Function, props: Prop): DocumentFragment
  componentDidMount(): void
  dispatchComponentDidMount(): void
  componentDidUpdate(oldProps: string, newProps: string): boolean
  setProps(nextProps: Prop): void
  getContent(): HTMLElement
  defineEmits(emits: {[key: string]: Function}): void
  addComponentEmmits(events: ComponentEvent): void
  show(): void
  hide(): void
}
