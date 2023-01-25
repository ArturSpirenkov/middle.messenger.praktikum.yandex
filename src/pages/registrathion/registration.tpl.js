import './registrathion.scss';

export default `
<main class="form-container">
  <form class="form">
    <h1 class="form__header">Регистрация</h1>

      <div class="form__input-box">
        {{{ formInputEmail }}}
        {{{ formInputLogin }}}
        {{{ formInputFirstName }}}
        {{{ formInputSecondName }}}
        {{{ formInputPhone }}}
        {{{ formInputPassword }}}
        {{{ formInputPasswordAgain }}}
      </div>

    <div class="form__buttons">
      {{{ RegisteredButton }}}
      {{{ LoginButton }}}
    </div>
  </form>  
</main>
`