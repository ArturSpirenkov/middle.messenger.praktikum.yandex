import Handlebars from 'handlebars';
import chat from './chat.tpl.js';

const HTMLchat = Handlebars.compile(chat)({});

export default HTMLchat;
