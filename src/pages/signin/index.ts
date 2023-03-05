import Block from '../../core/block/block';
import Handlebars from 'handlebars';
import signinTpl from './signin.tpl';
import Button from '../../components/button/index';
import InputForm from '../../components/input-form/index';
import Input from '../../components/input/index';
import Label from '../../components/label/index';
import ValidityError from '../../components/validity-error/index';
import { Validation, validationRules } from '~src/libs/validation/validation';
import { SigninProps } from './types';
// import {type ValidationRule } from '~src/libs/validation/types';
const formData = {
  login: '',
  password: '',
};

const vRules = {
  login: [
    validationRules.required,
    validationRules.lengthBoundary(3,20),
  ],
  password: [
    validationRules.required,
    validationRules.lengthBoundary(8,40),
    validationRules.oneLetterUppercased,
  ],
};
const $v = new Validation(formData, vRules);

const labelElementLogin = new Label(
  'label',
  {
    text: 'Логин',
    tagAttrs: {
      class: 'input-box__label',
      for: 'login',
    },
  }
);

const errorElementLogin = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);

const inputElementLogin = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      value: formData.login,
    },
    events: {
      blur: () => {
        // validation
        // if errors
        $v.$validation.login.$touch();
        if ($v.$validation.login.$invalid) {
          errorElementLogin.setProps(
            { text: $v.$validation.login.$errors[0] });
          inputElementLogin.onErrorInput();
        }
      },
      focus: () => {
        errorElementLogin.setProps({ text: '' });
        inputElementLogin.offErrorInput();
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.login = target;
      },
    },
  }
);

const inputFormLogin = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    // input: {
    //   label: {
    //     value: 'Login',
    //   },
    //   error: 'ERROR',
    // },
    LabelElement: labelElementLogin,
    InputElement: inputElementLogin,
    ErrorElement: errorElementLogin,
  }
);

const labelElementPassword = new Label(
  'label',
  {
    text: 'Пароль',
    tagAttrs: {
      class: 'input-box__label',
      for: 'password',
    },
  }
);

const errorElementPassword = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);

const inputElementPassword = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      value: formData.password,
    },
    events: {
      blur: () => {
        // validation
        // if errors
        $v.$validation.password.$touch();
        if ($v.$validation.password.$invalid) {
          errorElementPassword.setProps(
            { text: $v.$validation.password.$errors[0] });
          inputElementPassword.onErrorInput();
        }
      },
      focus: () => {
        errorElementPassword.setProps({ text: '' });
        inputElementPassword.offErrorInput();
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.password = target;
      },
    },
  }
);

const inputFormPassword = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    LabelElement: labelElementPassword,
    InputElement: inputElementPassword ,
    ErrorElement: errorElementPassword ,
  }
);

const loginButton = new Button(
  'button',
  {
    tagAttrs: {
      class: 'button',
      type: 'submit',
    },
    text: 'Войти',
    events: {
      click: (event) => {
        event.preventDefault();
        $v.$touch();
        if ($v.$invalid) {
          if ($v.$validation.login.$invalid) {
            console.log('login', errorElementLogin);
            errorElementLogin.setProps({ text: $v.$validation.login.$errors[0] });
          }
          if ($v.$validation.password.$invalid) {
            errorElementPassword.setProps({ text: $v.$validation.password.$errors[0] });
          }
          return;
        }
        console.log(formData);
      },
    },
  }
);

const notRegisteredButton = new Button(
  'button',
  {
    tagAttrs: {
      class: 'button button_secondery',
      type: 'button',
    },
    text: 'Нет аккаунта?',
  }
);

class SigninPage extends Block {
  constructor(tagName: string, props: SigninProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(signinTpl));
  }
}

const HTMLsignin = new SigninPage(
  'div',
  {
    tagAttrs: {
      class: 'wrapper-form',
    },
    InputFormLogin: inputFormLogin,
    InputFormPassword: inputFormPassword,
    LoginButton: loginButton,
    NotRegisteredButton: notRegisteredButton,
  }
);

export default HTMLsignin;
