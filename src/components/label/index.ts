import labelTpl from './label.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { LabelProps } from './types';

export default class Label extends Block {
  static componentName = 'TheError';
  constructor (tagName: string, props: LabelProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(labelTpl));
  }
}
