import './error.scss';

export default ` 
<div class="wrapper-error">
  <main class="error">
      <h1 class="error__status">
          {{{ error.status }}}
      </h1>

      <p class="error__text">
          {{{ error.text }}}
      </p>

      <a href="/" class="error__link">
          {{{ error.back }}}
      </a>
  </main>
</div> 
`