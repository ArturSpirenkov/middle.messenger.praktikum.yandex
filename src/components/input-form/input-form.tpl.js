import './input-form.scss'

export default `
<div class="input-box">
  <label 
    class="input-box__label"
  >
    {{ input.label.value }}
  </label>

  <input 
    class="input-box__input"
    type="text"
    name="{{ input.name }}"
    placeholder="{{ input.label.value }}"
  > 

  <span class="input-box__supp-info">{{ input.validity.error }}</span>
</div>
`