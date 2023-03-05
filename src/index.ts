import 'normalize.css';
import './assets/scss/index.scss';
import HTMLsignin from './pages/signin/index';
import HTMLregistrathion from './pages/registrathion/index';
import HTMLprofileMain from './pages/profile/profile-main/index';
// import HTMLprofileEdit from './pages/profile/profile-edit/index';
// import HTMLprofilePassword from './pages/profile/profile-password/index';
// import HTMLprofileUploadAvatar from './pages/profile/profile-upload-avatar/index';
import HTMLchat from './pages/chat/index';
import HTMLerror404 from './pages/error/404/index';
import HTMLerror500 from './pages/error/500/index';

const app = document.getElementById("root");

const routes = {
  '/': HTMLregistrathion,
  '/not-found': HTMLerror404,
  '/error500' : HTMLerror500,
  '/signin': HTMLsignin,
  '/profile': HTMLprofileMain,
  // '/profile-edit': HTMLprofileEdit,
  // '/profile-password': HTMLprofilePassword,
  // '/profile-upload-avatar': HTMLprofileUploadAvatar,
  '/chat': HTMLchat,
};

const path: keyof typeof routes = window.location.pathname as keyof typeof routes;
const pageComponent = routes[path];

if (app) {
  app.append(pageComponent.getContent());
}
