import TheError from '../../../components/error/index';

const HTMLerror404 = new TheError(
  'main',
  {
    tagAttrs: {
      class: 'error',
    },
    error: {
      status: 404,
      text: 'Не туда попали',
      back: {
        text: 'Назад к чатам',
        link: '#',
      },
    },
  }
);

export default HTMLerror404;
