import './input-profile.scss';

export default `
<div class="input-profile">
<label 
  class="input-profile__label"
>
  {{ input.label.value }}
</label>

<input 
  class="input-profile__input"
  type="{{ input.name }}"
  name="{{ input.name }}"
  id="{{ input.name }}"
  placeholder="{{ input.value }}"
> 
</div>
`;
