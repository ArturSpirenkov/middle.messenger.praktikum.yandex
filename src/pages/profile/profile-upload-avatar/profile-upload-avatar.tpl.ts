import './profile-upload-avatar.scss';

export default ` 
<div class="modal">
<main class="modal__content">
    <h2 class="modal__header">Загрузите файл</h2>
    <form class="modal__form">
        <label class="modal__label-upload">
          Выбрать файл на компьютере
            <input 
                type="file"
                id="avatar"
                name="avatar"
                class="modal__input-upload"
            /> 
        </label>
        <div class="modal__button">
           {{{ saveUserAvatarButton }}}
        </div>
    </form>
</main>
</div>
`;
