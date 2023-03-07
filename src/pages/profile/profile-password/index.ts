import Handlebars from 'handlebars';
import inputFormComponent from '../../../components/input-profile/index';
import buttonComponent from '../../../components/button/index';
import profilePassword from './profile-password.tpl';

const formInputOldPassword = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'oldpassword',
    name: 'password_old',
    label: {
      value: 'Старый пароль',
    },
  },
});

const formInputNewPassword = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'newPassword',
    name: 'password',
    label: {
      value: 'Новый пароль',
    },
  },
});

const formInputRepeatPassword = Handlebars.compile(inputFormComponent)({
  input: {
    value: 'repeatPassword',
    name: 'password_again',
    label: {
      value: 'Повторите новый пароль',
    },
  },
});

const saveUserPasswordButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Сохранить',
  },
  secondary: false,
});

const HTMLprofilePassword = Handlebars.compile(profilePassword)({
  formInputOldPassword,
  formInputNewPassword,
  formInputRepeatPassword,
  saveUserPasswordButton,
});

export default HTMLprofilePassword;
