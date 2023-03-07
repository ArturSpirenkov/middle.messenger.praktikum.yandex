import { TagAttribute, ComponentEvent } from '../../core/types';

export type ValidityErrorProps = {
  tagAttrs?: TagAttribute
  text: string
  events?: ComponentEvent
}
