import 'normalize.css';
import './assets/scss/index.scss';
import Handlebars from 'handlebars';
import HTMLsignin from './pages/signin/index.js';
import HTMLregistration from './pages/registrathion/index.js';
import HTMLprofileMain from './pages/profile/profile-main/index.js';
import HTMLprofileEdit from './pages/profile/profile-edit/index.js';
import HTMLprofilePassword from './pages/profile/profile-password/index.js';
import HTMLprofileUploadAvatar from './pages/profile/profile-upload-avatar/index.js';
import HTMLchat from './pages/chat/index.js';
import HTMLerror404 from './pages/error/404/index.js';
import HTMLerror500 from './pages/error/500/index.js';

let app = document.getElementById("root");

const routes = {
  '/': HTMLregistration,
  '/not-found': HTMLerror404, 
  '/error500' : HTMLerror500,
  '/signin': HTMLsignin,
  '/profile': HTMLprofileMain,
  '/profile-edit': HTMLprofileEdit,
  '/profile-password': HTMLprofilePassword,
  '/profile-upload-avatar': HTMLprofileUploadAvatar,
  '/chat': HTMLchat,
}

const path = window.location.pathname;

app.innerHTML = routes[path] || routes['/not-found'];
