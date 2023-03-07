import errorTpl from './error.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { ErrorProps } from './types';

export default class TheError extends Block {
  static componentName = 'TheError';
  constructor (tagName:string, props: ErrorProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(errorTpl));
  }
}
