import inputFormTpl from './input-form.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { InputFormProps } from './types';

export default class InputForm extends Block {
  static componentName = 'TheError';
  constructor (tagName: string, props: InputFormProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(inputFormTpl));
  }
}
