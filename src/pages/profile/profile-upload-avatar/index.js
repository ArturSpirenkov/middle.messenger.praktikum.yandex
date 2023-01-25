import Handlebars from 'handlebars';
import buttonComponent from '../../../components/buttons/index.js';
import profileUploadAvatar from './profile-upload-avatar.tpl.js';

const saveUserAvatarButton = Handlebars.compile(buttonComponent)({
  button: {
    type: 'button',
    text: 'Сохранить'
  },
  secondary: false,
});

const HTMLprofileUploadAvatar = Handlebars.compile(profileUploadAvatar)({
  saveUserAvatarButton
});

export default HTMLprofileUploadAvatar;