import Handlebars from 'handlebars';
import inputFormComponent from '../../components/input-form/index.js';
import buttonComponent from '../../components/buttons/index.js'
import signin from './signin.tpl.js';

const formInputLogin = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'login',
    label: {
      value: 'Логин',
    },
    validity: {
      error: 'Неверный логин'
    }
  }
});

const formInputPassword = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'password',
    label: {
      value: 'Пароль',
    },
    validity: {
      error: 'Неверный пароль'
    }
  }
});

const LoginButton  = Handlebars.compile(buttonComponent)({
  button: {
    type: 'submit',
    text: 'Войти'
  }
});

const NotRegisteredButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Нет аккаунта?'
  },
  secondary: true
});

const HTMLsignin = Handlebars.compile(signin)({
  formInputLogin,
  formInputPassword,
  LoginButton,
  NotRegisteredButton
})

export default HTMLsignin;