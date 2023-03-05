import { TagAttribute, ComponentEvent } from '../../core/types';
import Input from '../input/';
import Label from '../label/';
import ValidityError from '../validity-error';

export type InputFormProps = {
  tagAttrs?: TagAttribute
  LabelElement: Label
  InputElement: Input
  ErrorElement: ValidityError
  events?: ComponentEvent
}
