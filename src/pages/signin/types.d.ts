import Button from '../../components/button';
import InputFormProps from '../../components/input-form';
import { TagAttribute, ComponentEvent } from '../../core/types';

export type SigninProps = {
  tagAttrs?: TagAttribute
  InputFormLogin: InputFormProps
  InputFormPassword: InputFormProps
  LoginButton: Button
  NotRegisteredButton:Button
  events?: ComponentEvent
}
