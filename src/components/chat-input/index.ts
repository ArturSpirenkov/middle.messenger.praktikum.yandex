import chatInput from './chat-input.tpl';
import Block from '~/src/core/block/block';
import Handlebars from 'handlebars';
import { InputProps } from './types';
import AttachButton from './components/attachButton/index';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import { Validation, validationRules } from '~src/libs/validation/validation';

const formData = {
  message: '',
};

const vRules = {
  message: [
    validationRules.required,
  ],
};

const $v = new Validation(formData, vRules);

export default class ChatInput extends Block {
  static componentName = 'chatInput';
  constructor (tagName: string, props: InputProps) {
    const attachButton = new AttachButton('button', {
      tagAttrs: {
        class: 'attach-button',
      },
      events: {
        click: () => {
          console.log('upload docs or image');
        },
      },
    });

    const input = new Input('input', {
      tagAttrs: {
        class: 'input_send',
        placeholder: 'Сообщение',
      },
      events: {
        input: (event: any) => {
          const target: any = event.target.value;
          formData.message = target;
        },
      },
    });

    const sendButton = new Button('button', {
      text: 'send',
      events: {
        click: (e) => {
          e.preventDefault();
          $v.$touch();
          if ($v.$invalid) { return; }
          console.log(formData);
        },
      },
    });

    super(tagName, {
      AttachButton: attachButton,
      Input: input,
      SendButton: sendButton,
      ...props,
    });
  }

  render() {
    return this.compile(Handlebars.compile(chatInput));
  }
}
