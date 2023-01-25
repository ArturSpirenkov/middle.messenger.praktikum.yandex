import './chat.scss';

export default `
<main class="main">
<div class="chat__left-side left-side">
  <p class="left-side__header">
    профиль 
  </p>

  <div class="left-side__search">
    <input 
    type="text" 
    class="search"
    placeholder="Поиск"
    > 
  </div>

  <ul class="chat-list">
    <li class="chat">
      <div class="avatar">
          <img src="#" alt="avatar">
      </div>
      <div class="chat__content">
          <div class="chat__header">
              <p class="chat__name">
                Илья
              </p>
              <time class="chat__time">
                  13:10
              </time>
          </div>
          <div class="chat__message">
              <p class="chat__under">
                Друзья, у меня для вас особенный выпуск новостей!...
              </p>
              <p class="chat__unread">
                  <span class="unread_count">4</span>
              </p>
          </div>
      </div>
    </li>
  </ul>
</div>

<div class="content">
  <p class="content__no-data">Выберите чат чтобы отправить сообщение</p>
</div>
</main>
`