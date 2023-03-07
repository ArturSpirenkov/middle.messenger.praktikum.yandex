import Block from '../../../core/block/block';
import Handlebars from 'handlebars';
import profileMainTpl from './profile-main.tpl';
import Button from '../../../components/button/index';
import InputForm from '../../../components/input-form/index';
import Input from '../../../components/input/index';
import Label from '../../../components/label/index';
import ValidityError from '../../../components/validity-error/index';
// import { RegistrathionProps } from './types';
import { Validation, validationRules } from '~src/libs/validation/validation';

const formData = {
  email: 'pochta@yandex.ru',
  login: 'Ivanod314',
  first_name: 'Иван',
  second_name: 'Иванов',
  phone: '+7(909)9673030',
};

const vRules = {
  email: [
    validationRules.required,
    validationRules.email,
  ],
  login: [
    validationRules.required,
    validationRules.notOnlyNumbers,
    validationRules.lengthBoundary(3,20),
  ],
  first_name: [
    validationRules.required,
    validationRules.isFirstLetterUppercase,
    validationRules. doNotUseSpecialСharacters,
  ],
  second_name: [
    validationRules.required,
    validationRules.isFirstLetterUppercase,
    validationRules. doNotUseSpecialСharacters,
  ],
  phone: [
    validationRules.required,
    validationRules.lengthBoundary(10,15),
  ],
};

const $v = new Validation(formData, vRules);

const labelElementEmail = new Label(
  'label',
  {
    text: 'Почта',
    tagAttrs: {
      class: 'property__label',
      for: 'email',
    },
  }
);
const errorElementEmail = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'property__supp-info',
    },
  }
);
const inputElementEmail = new Input(
  'input',
  {
    tagAttrs: {
      value: 'pochta@yandex.ru',
      class: 'property__input',
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
      input: (event: Event) => {
        const target = (event.target as HTMLInputElement).value;
        formData.email = target;
      },
    },
  }
);

const inputFormEmail = new InputForm(
  'li',
  {
    tagAttrs: {
      class: 'profile__row-propertys',
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
      class: 'property__label',
      for: 'login',
    },
  }
);

const errorElementLogin = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'property__supp-info',
    },
  }
);

const inputElementLogin = new Input(
  'input',
  {
    tagAttrs: {
      value: 'Ivanod314',
      class: 'property__input',
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
      input: (event: Event) => {
        const target = (event.target as HTMLInputElement).value;
        formData.login = target;
      },
    },
  }
);

const inputFormLogin = new InputForm(
  'li',
  {
    tagAttrs: {
      class: 'profile__row-propertys',
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
      class: 'property__label',
      for: 'first_name',
    },
  }
);

const errorElementFirstName = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'property__supp-info',
    },
  }
);

const inputElementFirsName = new Input(
  'input',
  {
    tagAttrs: {
      value: 'Иван',
      class: 'property__input',
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
      input: (event: Event) => {
        const target = (event.target as HTMLInputElement).value;
        formData.first_name = target;
      },
    },
  }
);

const inputFormFirstName = new InputForm(
  'li',
  {
    tagAttrs: {
      class: 'profile__row-propertys',
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
      class: 'property__label',
      for: 'first_name',
    },
  }
);
const errorElementSecondName = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'property__supp-info',
    },
  }
);

const inputElementSecondName = new Input(
  'input',
  {
    tagAttrs: {
      value: 'Иванов',
      class: 'property__input',
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
      input: (event: Event) => {
        const target = (event.target as HTMLInputElement).value;
        formData.second_name = target;
      },
    },
  }
);

const inputFormSecondName = new InputForm(
  'li',
  {
    tagAttrs: {
      class: 'profile__row-propertys',
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
      class: 'property__label',
      for: 'phone',
    },
  }
);

const errorElementPhone = new ValidityError(
  'span',
  {
    text: '',
    tagAttrs: {
      class: 'property__supp-info',
    },
  }
);

const inputElementPhone = new Input(
  'input',
  {
    tagAttrs: {
      class: 'property__input',
      id: 'phone',
      name: 'phone',
      type: 'text',
      value: '+7(909)9673030',
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
      input: (event: Event) => {
        const target = (event.target as HTMLInputElement).value;
        formData.phone = target;
      },
    },
  }
);

const inputFormPhone = new InputForm(
  'li',
  {
    tagAttrs: {
      class: 'profile__row-propertys',
    },
    LabelElement: labelElementPhone,
    InputElement: inputElementPhone,
    ErrorElement: errorElementPhone,
  }
);

// // SUBMIT BUTTON

const editDateButton = new Button(
  'a',
  {
    text: 'Изменить данные',
    tagAttrs: {
      class: 'link',
      type: 'submit',
    },
    events: {
      click: (event: Event) => {
        event.preventDefault();
        $v.$touch();
        if ($v.$invalid) {
          if ($v.$validation.login.$invalid) {
            errorElementLogin.setProps({ text: $v.$validation.login.$errors[0] });
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

const editPassowrdButton = new Button(
  'a',
  {
    text: 'Изменить пароль',
    tagAttrs: {
      class: 'link',
      type: 'submit',
    },
  }
);

const exitButton = new Button(
  'a',
  {
    text: 'Выйти',
    tagAttrs: {
      class: 'link link_color-red',
      type: 'submit',
    },
  }
);

class ProfileMainPage extends Block {
  constructor(tagName: string, props: any) {
    super(tagName, props);
  }

  render() {
    return this.compile(Handlebars.compile(profileMainTpl));
  }
}

const HTMLregistrathion = new ProfileMainPage(
  'main',
  {
    tagAttrs: {
      class: 'profile',
    },
    InputFormEmail: inputFormEmail,
    InputFormLogin: inputFormLogin,
    InputFormFirstName: inputFormFirstName,
    InputFormSecondName : inputFormSecondName,
    InputFormPhone: inputFormPhone,
    EditDateButton: editDateButton ,
    EditPassowrdButton: editPassowrdButton,
    ExitButton: exitButton,
    // InputNameInChat: inputNameInChat,
  }
);

export default HTMLregistrathion;
