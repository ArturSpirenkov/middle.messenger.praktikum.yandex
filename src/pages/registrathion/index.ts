import Block from '../../core/block/block';
import Handlebars from 'handlebars';
import registrathionTpl from './registration.tpl';
import Button from '../../components/button/index';
import InputForm from '../../components/input-form/index';
import Input from '../../components/input/index';
import Label from '../../components/label/index';
import ValidityError from '../../components/validity-error/index';
import { RegistrathionProps } from './types';
import { Validation, validationRules } from '~src/libs/validation/validation';

const formData = {
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  phone: '',
  password: '',
  password_again: '',
};

const vRules = {
  email: [
    validationRules.required,
    validationRules.email,
  ],
  login: [
    validationRules.required,
    validationRules.lengthBoundary(3,20),
  ],
  first_name: [
    validationRules.required,
  ],
  second_name: [
    validationRules.required,
  ],
  phone: [
    validationRules.required,
    validationRules.lengthBoundary(10,15),
  ],
  password: [
    validationRules.required,
    validationRules.lengthBoundary(8,40),
    validationRules.oneLetterUppercased,
  ],
  password_again: [
    validationRules.required,
    {
      $message: 'Не совпадает с паролем выше',
      $validator: (value: string) => value === formData.password,
    },
    validationRules.lengthBoundary(8,40),
    validationRules.oneLetterUppercased,
  ],
};

const $v = new Validation(formData, vRules);

// EMAIL INPUT STARTS
const labelElementEmail = new Label(
  'label',
  {
    text: 'Почта',
    tagAttrs: {
      class: 'input-box__label',
      for: 'email',
    },
  }
);
const errorElementEmail = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);
const inputElementEmail = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'email',
      name: 'email',
      type: 'text',
      placeholder: 'Почта',
    },
    events: {
      blur: () => {
        $v.$validation.email.$touch();
        if ($v.$validation.email.$invalid) {
          errorElementEmail.setProps(
            { text: $v.$validation.email.$errors[0] });
        }
      },
      focus: () => {
        errorElementEmail.setProps({ text: '' });
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.email = target;
      },
    },
  }
);

const inputFormEmail = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    LabelElement: labelElementEmail,
    InputElement: inputElementEmail ,
    ErrorElement: errorElementEmail ,
  }
);

// LOGIN INPUT STARTS
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
    },
    events: {
      blur: () => {
        $v.$validation.login.$touch();
        if ($v.$validation.login.$invalid) {
          errorElementLogin.setProps(
            { text: $v.$validation.login.$errors[0] });
        }
      },
      focus: () => {
        errorElementLogin.setProps({ text: '' });
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
    LabelElement: labelElementLogin,
    InputElement: inputElementLogin ,
    ErrorElement: errorElementLogin,
  }
);

// FIRST NAME INPUT STARTS
const labelElementFirsName = new Label(
  'label',
  {
    text: 'Имя',
    tagAttrs: {
      class: 'input-box__label',
      for: 'first_name',
    },
  }
);

const errorElementFirstName = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);

const inputElementFirsName = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'first_name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
    },
    events: {
      blur: () => {
        $v.$validation.first_name.$touch();
        if ($v.$validation.first_name.$invalid) {
          errorElementFirstName.setProps(
            { text: $v.$validation.first_name.$errors[0] });
        }
      },
      focus: () => {
        errorElementFirstName.setProps({ text: '' });
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.first_name = target;
      },
    },
  }
);

const inputFormFirstName = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    LabelElement: labelElementFirsName,
    InputElement: inputElementFirsName ,
    ErrorElement: errorElementFirstName ,
  }
);

// SECOND NAME INPUT STARTS
const labelElementSecondName = new Label(
  'label',
  {
    text: 'Фамилия',
    tagAttrs: {
      class: 'input-box__label',
      for: 'first_name',
    },
  }
);
const errorElementSecondName = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);

const inputElementSecondName = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'second_name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия',
    },
    events: {
      blur: () => {
        $v.$validation.second_name.$touch();
        if ($v.$validation.second_name.$invalid) {
          errorElementSecondName.setProps(
            { text: $v.$validation.second_name.$errors[0] });
        }
      },
      focus: () => {
        errorElementSecondName.setProps({ text: '' });
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.second_name = target;
      },
    },
  }
);

const inputFormSecondName = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    LabelElement: labelElementSecondName,
    InputElement: inputElementSecondName,
    ErrorElement: errorElementSecondName,
  }
);

// PHONE INPUT STARTS
const labelElementPhone = new Label(
  'label',
  {
    text: 'Телефон',
    tagAttrs: {
      class: 'input-box__label',
      for: 'phone',
    },
  }
);

const errorElementPhone = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);

const inputElementPhone = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'phone',
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон',
    },
    events: {
      blur: () => {
        $v.$validation.phone.$touch();
        if ($v.$validation.phone.$invalid) {
          errorElementPhone.setProps(
            { text: $v.$validation.phone.$errors[0] });
        }
      },
      focus: () => {
        errorElementPhone.setProps({ text: '' });
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.phone = target;
      },
    },
  }
);

const inputFormPhone = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    LabelElement: labelElementPhone,
    InputElement: inputElementPhone,
    ErrorElement: errorElementPhone,
  }
);

// PASSWORD INPUT STARTS
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
      type: 'text',
      placeholder: 'Пароль',
    },
    events: {
      blur: () => {
        $v.$validation.password.$touch();
        if ($v.$validation.password.$invalid) {
          errorElementPassword.setProps(
            { text: $v.$validation.password.$errors[0] });
        }
      },
      focus: () => {
        errorElementPassword.setProps({ text: '' });
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
    InputElement: inputElementPassword,
    ErrorElement: errorElementPassword,
  }
);

// PASSWORD AGAIN INPUT STARTS
const labelElementPasswordAgain = new Label(
  'label',
  {
    text: 'Подтвердить пароль',
    tagAttrs: {
      class: 'input-box__label',
      for: 'password',
    },
  }
);

const errorElementPasswordAgain = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'input-box__supp-info',
    },
  }
);

const inputElementPasswordAgain = new Input(
  'input',
  {
    tagAttrs: {
      class: 'input-box__input',
      id: 'password_again',
      name: 'password_again',
      type: 'text',
      placeholder: 'Пароль',
    },
    events: {
      blur: () => {
        $v.$validation.password_again.$touch();
        if ($v.$validation.password_again.$invalid) {
          errorElementPasswordAgain.setProps(
            { text: $v.$validation.password_again.$errors[0] });
        }
      },
      focus: () => {
        errorElementPasswordAgain.setProps({ text: '' });
      },
      input: (event: any) => {
        const target: any = event.target.value;
        formData.password_again = target;
      },
    },
  }
);

const inputFormPasswordAgain = new InputForm(
  'div',
  {
    tagAttrs: {
      class: 'input-box',
    },
    LabelElement: labelElementPasswordAgain,
    InputElement: inputElementPasswordAgain,
    ErrorElement: errorElementPasswordAgain,
  }
);

// SUBMIT BUTTON
const registrathionButton = new Button(
  'button',
  {
    tagAttrs: {
      class: 'button',
      type: 'submit',
    },
    text: 'Зарегистрироваться',
    events: {
      click: (event) => {
        event.preventDefault();
        $v.$touch();
        if ($v.$invalid) {
          if ($v.$validation.login.$invalid) {
            errorElementLogin.setProps({ text: $v.$validation.login.$errors[0] });
          }
          if ($v.$validation.password.$invalid) {
            errorElementPassword.setProps({ text: $v.$validation.password.$errors[0] });
          }
          if ($v.$validation.password_again.$invalid) {
            errorElementPasswordAgain.setProps({ text: $v.$validation.password_again.$errors[0] });
          }
          if ($v.$validation.first_name.$invalid) {
            errorElementFirstName.setProps({ text: $v.$validation.first_name.$errors[0] });
          }
          if ($v.$validation.second_name.$invalid) {
            errorElementSecondName.setProps({ text: $v.$validation.second_name.$errors[0] });
          }
          if ($v.$validation.email.$invalid) {
            errorElementEmail.setProps({ text: $v.$validation.email.$errors[0] });
          }
          if ($v.$validation.phone.$invalid) {
            errorElementPhone.setProps({ text: $v.$validation.phone.$errors[0] });
          }
          return;
        }
        console.log(formData);
      },
    },
  }
);

const loginButton = new Button(
  'button',
  {
    tagAttrs: {
      class: 'button button_secondery',
      type: 'button',
    },
    text: 'Войти',
  }
);

class RegistrathionPage extends Block {
  constructor(tagName: string, props: RegistrathionProps) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(registrathionTpl));
  }
}

const HTMLregistrathion = new RegistrathionPage(
  'div',
  {
    tagAttrs: {
      class: 'wrapper-form',
    },
    InputFormEmail: inputFormEmail,
    InputFormLogin: inputFormLogin,
    InputFormFirstName: inputFormFirstName,
    InputFormSecondName : inputFormSecondName,
    InputFormPhone: inputFormPhone,
    InputFormPassword: inputFormPassword ,
    InputFormPasswordAgain: inputFormPasswordAgain,
    RegistrathionButton: registrathionButton,
    LoginButton: loginButton,
  }
);

export default HTMLregistrathion;
