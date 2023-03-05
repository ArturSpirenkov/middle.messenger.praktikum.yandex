import Handlebars from 'handlebars';
import buttonComponent from '../../../components/button/index';
import profileUploadAvatar from './profile-upload-avatar.tpl';

const saveUserAvatarButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Сохранить',
  },
  secondary: false,
});

const HTMLprofileUploadAvatar = Handlebars.compile(profileUploadAvatar)({
  saveUserAvatarButton,
});

export default HTMLprofileUploadAvatar;
