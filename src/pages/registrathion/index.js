import Handlebars from 'handlebars';
import inputFormComponent from '../../components/input-form/index.js';
import buttonComponent from '../../components/buttons/index.js';
import registrathion from './registration.tpl.js';

const formInputEmail = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'email',
    label: {
      value: 'Почта',
    },
    validity: {
      error: 'error'
    }
  }
});

const formInputLogin = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'login',
    label: {
      value: 'Логин',
    },
    validity: {
      error: 'error'
    }
  }
});

const formInputFirstName = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'first-name',
    label: {
      value: 'Имя',
    },
    validity: {
      error: 'error'
    }
  }
});

const formInputSecondName = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'second-name',
    label: {
      value: 'Фамилия',
    },
    validity: {
      error: 'error'
    }
  }
});

const formInputPhone = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'number-phone',
    label: {
      value: 'Телефон',
    },
    validity: {
      error: 'error'
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
      error: 'error'
    }
  }
});

const formInputPasswordAgain = Handlebars.compile(inputFormComponent)({
  input: {
    name: 'password-again',
    label: {
      value: 'Подтвердите пароль',
    },
    validity: {
      error: 'error'
    }
  }
});

const RegisteredButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'submit',
    text: 'Зарегистрироваться'
  },
  // secondary: true
});

const LoginButton  = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Войти'
  },
  secondary: true
});

const HTMLregistration = Handlebars.compile(registrathion)({
  formInputEmail,
  formInputLogin,
  formInputFirstName,
  formInputSecondName,
  formInputPhone,
  formInputPassword,
  formInputPasswordAgain,
  RegisteredButton,
  LoginButton 

});

export default HTMLregistration;

