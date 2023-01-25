import './signin.scss';

export default `
  <form class="form">
    <h1 class="form__header">Вход</h1>
    <div class="form_input-wrapper">
      <div class="form__input-box">
        {{{ formInputLogin }}}
        {{{ formInputPassword }}}
    </div>
    <div class="form__buttons">
      {{{ LoginButton }}}
      {{{ NotRegisteredButton }}}
    </div>
  </form>  
`
