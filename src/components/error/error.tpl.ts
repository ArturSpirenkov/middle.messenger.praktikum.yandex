import './error.scss';

export default ` 
      <h1 class="error__status">
          {{{ error.status }}}
      </h1>

      <p class="error__text">
          {{{ error.text }}}
      </p>

      <a href="{{{ error.back.link}}}" class="error__link">
          {{{ error.back.text }}}
      </a>
`;
