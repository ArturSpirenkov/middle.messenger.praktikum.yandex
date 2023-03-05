import './chat-message.scss';

export default `
<div class="message {{# if isMine }} message_right {{/ if}}">
        <p class="message__text">
            {{ msg.content}}
        </p>
    <div class="message__time-wrap">
      <time class="message__time">
          {{ msg.time }}
      </time>
    </div>
</div>
`;
