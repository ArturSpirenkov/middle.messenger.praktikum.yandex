import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import attachButtonTpl from './attachButton.tpl';

export default class AttachButton extends Block {
  constructor (tagName: string, props: any) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(attachButtonTpl));
  }
}
