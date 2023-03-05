import TheError from '../../../components/error/index';

const HTMLerror500 = new TheError(
  'main',
  {
    tagAttrs: {
      class: 'error',
    },
    error: {
      status: 500,
      text: 'Мы уже фиксим',
      back: {
        text: 'Назад к чатам',
        link: '#',
      },
    },
  }
);

export default HTMLerror500;
