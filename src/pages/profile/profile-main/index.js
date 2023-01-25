import Handlebars from 'handlebars';
import inputFormComponent from '../../../components/input-profile/index.js';
import buttonComponent from '../../../components/buttons/button-profile/index.js';
import profile from './profile-main.tpl.js';

const formInputEmail = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'my@email.com',
    name: 'email',
    label: {
      value: 'Почта',
    },
  }
});

const formInputLogin = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'ivanivanov',
    name: 'login',
    label: {
      value: 'Логин',
    },
  }
});

const formInputFirstName = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'Иван',
    name: 'Name',
    label: {
      value: 'Имя',
    },
  }
});

const formInputSecondName = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'Иванов',
    name: 'SecondName',
    label: {
      value: 'Фамилия',
    },
  }
});

const formInputNameChat = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'Иван',
    name: 'NameChat',
    label: {
      value: 'Имя в чате',
    },
  }
});

const formInputPhone = Handlebars.compile(inputFormComponent)({
  input: {
    value: '+7 (909) 967 30 30',
    name: 'Phone',
    label: {
      value: 'Телефон',
    },
  }
});

const editDateButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Изменить данные'
  },
  secondary: false,
});

const editPassowrdButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Изменить пароль'
  },
  secondary: false,
});

const exitButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Выйти'
  },
  secondary: true,
});

const HTMLprofileMain = Handlebars.compile(profile)({
  formInputEmail,
  formInputLogin,
  formInputFirstName,
  formInputSecondName,
  formInputNameChat,
  formInputPhone,
  editDateButton,
  editPassowrdButton,
  exitButton 
});

export default HTMLprofileMain;

