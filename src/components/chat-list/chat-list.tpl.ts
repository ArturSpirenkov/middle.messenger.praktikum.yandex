import './chat-list.scss';

export default `
{{# each data }}
<li class="chat-item" data-chat-id="{{ this.id}}">
  <div class="chat__avatar">
      <img src="{{ this.avatar }}" alt="avatar">
  </div>
  <div class="chat__content">
      <div class="chat__header">
          <p class="chat__name">
            {{this.title }}
          </p>
          <time class="chat__time">
              {{ this.time }}
          </time>
      </div>
      <div class="chat__message">
          <p class="chat__under">
            {{ this.last_message.content }}
          </p>
          <p class="chat__unread">
              <span class="chat__unread-count">{{ this.unread_count }}</span>
          </p>
      </div>
  </div>
</li>
{{/ each }}
`;
