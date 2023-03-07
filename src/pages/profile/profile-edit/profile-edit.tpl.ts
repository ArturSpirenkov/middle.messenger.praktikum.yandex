import '../profile.scss';

export default `
<div class="profile">
<aside class="profile__aside-bar">
  <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9976 19.256C11.3161 18.9305 11.3161 18.4046 10.9954 18.0813L7.35502 14.4023L7.27097 14.328C6.94949 14.0804 6.49065 14.1062 6.19865 14.4045C6.03938 14.5673 5.95975 14.7787 5.95975 14.9902C5.95975 15.2039 6.03938 15.4165 6.20084 15.5792L9.84011 19.2582L9.92417 19.3323C10.2458 19.5791 10.7056 19.5534 10.9976 19.256ZM20.2844 12.824C20.6877 12.7728 21 12.4233 21 12.0002C21 11.5418 20.6335 11.1698 20.1818 11.1698L5.79927 11.1698L10.9953 5.91866L11.0688 5.83385C11.3138 5.50912 11.2895 5.04236 10.9975 4.74399C10.6789 4.4196 10.1607 4.41849 9.84109 4.74177L3.24109 11.4123L3.16831 11.4958C3.05758 11.6419 3 11.8203 3 12.0002C3 12.1076 3.02073 12.215 3.06218 12.3168C3.18873 12.6279 3.48655 12.8305 3.81818 12.8305H20.1818L20.2844 12.824Z" fill="#200E32"/>
      </svg>
  </div>
</aside>

<main class="profile__content">
  <div class=" profile__avatar">
  
  </div>

  <h1 class="profile__name">Иван</h1>

  <div class="form__input-box">
    <ul class="profile__propertys">
      <li class="profile__row-propertys">
        {{{ formInputEmail }}}
      </li>
      <li class="profile__row-propertys">
        {{{ formInputLogin }}}
      </li>
      <li class="profile__row-propertys">
        {{{ formInputFirstName }}}
      </li>
      <li class="profile__row-propertys">
        {{{ formInputSecondName }}}
      </li>
      <li class="profile__row-propertys">
        {{{ formInputNameChat }}}
      </li>
      <li class="profile__row-propertys">
        {{{ formInputPhone }}}
      </li>
    </ul>
  </div>
  <div class="profile__links">
      {{{ saveUserDateButton }}}
  </div>
</main>
</div>
`;