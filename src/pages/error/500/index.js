import Handlebars from 'handlebars';
import error from '../../../components/error/index.js';

const HTMLerror500 = Handlebars.compile(error)({
  error: {
      status: '500',
      text: 'не туда попали',
      back: 'На главную'
  }
});

export default HTMLerror500;

