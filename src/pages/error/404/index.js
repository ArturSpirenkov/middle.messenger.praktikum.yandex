import Handlebars from 'handlebars';
import error from '../../../components/error/index.js';

const HTMLerror404 = Handlebars.compile(error)({
  error: {
      status: '404',
      text: 'не туда попали',
      back: 'На главную'
  }
});

export default HTMLerror404;

