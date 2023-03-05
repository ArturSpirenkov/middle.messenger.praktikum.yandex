import chatListTpl from './chat-list.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { InputProps } from './types';

export default class ChatList extends Block {
  constructor (tagName: string, props: any) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(chatListTpl));
  }
}
