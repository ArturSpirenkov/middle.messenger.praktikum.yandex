import chatMessageTpl from './chat-message.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { InputProps } from './types';

export default class ChatMessage extends Block {
  constructor (tagName: string, props: any) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(chatMessageTpl));
  }
}
