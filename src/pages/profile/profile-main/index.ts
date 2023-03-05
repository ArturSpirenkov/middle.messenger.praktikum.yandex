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
  }
);

const inputFormLogin = new InputForm(
  'div',
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
  }
);

const inputFormFirstName = new InputForm(
  'div',
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
  }
);

const inputFormSecondName = new InputForm(
  'div',
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
      value: '+7 (909) 967 30 30',
      placeholder: 'Телефон',
    },
  }
);

const inputFormPhone = new InputForm(
  'div',
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
    EditDateButton : editDateButton ,
    EditPassowrdButton: editPassowrdButton,
    ExitButton: exitButton,
    // InputNameInChat: inputNameInChat,
  }
);

export default HTMLregistrathion;
