import './chat.scss';

export default `
<main class="chat-box">
<div class="chat__left-side left-side">
  <p class="left-side__header">
    Профиль
  </p>

  <div class="left-side__search"> 
    {{{ InputSearch }}}
  </div>

  {{{ ChatItems }}}    
</div>

<div class="content">
  {{# if showChat }}
  <div class="content__header">
      <div class="profile-chat">
          <div class="profile-chat__avatar">
              <img src="{{ selectedChat.avatar }}" alt="avatar">
          </div>
          <div class="profile-chat__title">
              {{ selectedChat.title }}title
          </div>
      </div>
      {{{ menuDotHeader }}}
  </div>
  <div class="content__messages">
      {{{ ChatMessages }}}
  </div>
  {{{ ChatInput }}}
  {{ else }}
      <p class="content__no-data">Выберите чат чтобы отправить сообщение</p>
  {{/ if }}
</div>
</main>
`;
