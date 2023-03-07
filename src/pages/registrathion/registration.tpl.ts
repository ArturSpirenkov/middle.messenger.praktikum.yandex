import './registrathion.scss';

export default `
  <main class="form">
    <h1 class="form__header">Регистрация</h1>

      <div class="form__input-box">
        {{{ InputFormEmail }}}
        {{{ InputFormLogin }}}
        {{{ InputFormFirstName }}}
        {{{ InputFormSecondName }}}
        {{{ InputFormPhone }}}
        {{{ InputFormPassword }}}
        {{{ InputFormPasswordAgain }}}
      </div>

    <div class="form__buttons">
      {{{ RegistrathionButton }}}
      {{{ LoginButton }}}
    </div>
  </main>
`;
