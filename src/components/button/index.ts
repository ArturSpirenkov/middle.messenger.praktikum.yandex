import button from './button.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { ButtonProps } from './types';

// type Events = 'onClick'
// type ButtonEmits = {
//   [key in Events]: Function
// }
export default class Button extends Block {
  static componentName = 'Button';
  constructor (
    tagName: string,
    props: ButtonProps
    /*emits: ButtonEmits = {
      'onClick': () => {},
    }*/)
  {
    super(tagName, props);
    // 1. Создаем ивент баз с событиями из пропсов { onClick: () => {}}
    // this.defineEmits(emits);
  }

  // addComponentEmmits () {
  //   return {
  //     click: this.onClick.bind(this),
  //   };
  // }

  // public onClick () {
  //   console.log('All buttons fundtio');
  //   this.componentEmits().emit('onClick' as Events);
  // }

  render() {
    return this.compile(Handlebars.compile(button));
  }
}
