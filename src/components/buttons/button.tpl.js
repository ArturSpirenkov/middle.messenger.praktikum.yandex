import './button.scss';

export default `
{{#if secondary}}
  <button type="{{ button.type }}" class="button button_secondery">
  {{ else }}
  <button type="{{ button.type }}" class="button">
{{/if}}
{{ button.text }}
</button> 
`