import './button-profile.scss';

export default `
{{#if secondary}}
  <button type="{{ button.type }}" class="button-profile button-profile_secondery">
  {{ else }}
  <button type="{{ button.type }}" class="button-profile">
{{/if}}
{{ button.text }}
</button> 
`
