import Block from '../../core/block/block';
import Handlebars from 'handlebars';
import Button from '../../components/button/index';
import InputForm from '../../components/input-form/index';
import Input from '../../components/input/index';
import Label from '../../components/label/index';
import ChatList from '../../components/chat-list/index';
import chatTpl from './chat.tpl';
import ChatInput from '../../components/chat-input';
import ChatMessage from '../../components/chat-message';

let HTMLchatPage = {} as Block;
const inputSearch = new Input('input', {
  tagAttrs: {
    class: 'search',
    id: 'password',
    name: 'password',
    type: 'text',
    placeholder: 'Поиск',
  },
}
);

const mockChatMessages = {
  '1': [
    {
      isMine: false,
      msg: {
        time: '11:23',
        content: 'hi',
        image: '/images/1.jpg',
      },
    },
    {
      isMine: true,
      msg: {
        time: '11:23',
        content: 'hi chel',
        image: '/images/1.jpg',
      },
    },
    {
      isMine: false,
      msg: {
        time: '11:23',
        content: 'hello',
        image: '/images/1.jpg',
      },
    },
    {
      isMine: false,
      msg: {
        time: '11:23',
        content: 'eeeyy chel',
        image: '/images/1.jpg',
      },
    },
  ],
  '2': [
    {
      isMine: false,
      msg: {
        time: '11:23',
        content: 'hi numjber 2',
        image: '/1.jpg',
      },
    },
    {
      isMine: true,
      msg: {
        time: '11:23',
        content: 'hi chel',
        image: '/1.jpg',
      },
    },
    {
      isMine: false,
      msg: {
        time: '11:23',
        content: 'have a good day chel',
        image: '/1.jpg',
      },
    },
    {
      isMine: false,
      msg: {
        time: '11:23',
        content: 'eeeyy chel',
        image: '/1.jpg',
      },
    },
  ],
};
let chatMessages = [];
const chatItems = new ChatList('ul', {
  data: [
    {
      "id": '1',
      "title": "my-chat1",
      "avatar": "/123/avatar1.jpg",
      "unread_count": 15,
      "last_message": {
        "user": {
          "first_name": "Petya",
          "second_name": "Pupkin",
          "avatar": "/path/to/avatar.jpg",
          "email": "my@email.com",
          "login": "userLogin",
          "phone": "8(911)-222-33-22",
        },
        "time": "2020-01-02T14:22:22.000Z",
        "content": "this is message content",
      },
    },
    {
      "id": '2',
      "title": "my-chat2",
      "avatar": "/123/avatar1.jpg",
      "unread_count": 15,
      "last_message": {
        "user": {
          "first_name": "Petya",
          "second_name": "Pupkin",
          "avatar": "/path/to/avatar.jpg",
          "email": "my@email.com",
          "login": "userLogin",
          "phone": "8(911)-222-33-22",
        },
        "time": "2020-01-02T14:22:22.000Z",
        "content": "this is message content",
      },
    },
  ],
  tagAttrs: {
    class: 'chat-list',
  },
  events: {
    click: (event: any) => {
      const chatItem = event.target.closest('.chat-item');
      const chatId = chatItem.dataset.chatId;
      // TODO: API request
      // const chatMessages = await fetch('./getMessages', {params: {id: chatId}})
      chatMessages = mockChatMessages[chatId as keyof typeof mockChatMessages].map((message) => {
        return new ChatMessage('div', message);
      });
      console.log(chatMessages);
      HTMLchatPage.setProps({ ChatMessages: chatMessages, showChat: true });
    },
  },
});

const chatInput = new ChatInput('form', {
  tagAttrs: {
    class: 'content__form',
  },
});

class ChatPage extends Block {
  constructor(tagName: string, props: any) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(chatTpl));
  }
}

HTMLchatPage = new ChatPage(
  'main',
  {
    tagAttrs: {
    },
    ChatItems: chatItems,
    InputSearch: inputSearch,
    ChatInput: chatInput,
  }
);

export default HTMLchatPage;
