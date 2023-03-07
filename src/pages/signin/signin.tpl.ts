import './signin.scss';

export default `
<main class="form">
  <h1 class="form__header">Вход</h1>
  <div class="form_input-wrapper">
    <div class="form__input-box">
      {{{ InputFormLogin }}}
      {{{ InputFormPassword }}}
  </div>
  <div class="form__buttons">
    {{{ LoginButton }}}
    {{{ NotRegisteredButton }}}
  </div>
</main>  
`;
