import validityErrorTpl from './validity-error.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { ValidityErrorProps } from './types';

export default class ValidityError extends Block {
  static componentName = 'TheError';
  constructor (tagName: string, props: ValidityErrorProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(validityErrorTpl));
  }
}
