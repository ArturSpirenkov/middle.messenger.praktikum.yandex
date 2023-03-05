import inputTpl from './input.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { InputProps } from './types';

export default class Input extends Block {
  static componentName = 'TheError';
  constructor (tagName: string, props: InputProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(inputTpl));
  }

  onErrorInput () {
    this.element.classList.add('error');
  }
  offErrorInput () {
    this.element.classList.remove('error');
  }
}
