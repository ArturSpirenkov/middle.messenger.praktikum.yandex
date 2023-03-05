import { TagAttribute, ComponentEvent } from '../../core/types';

export type ErrorProps = {
  tagAttrs?: TagAttribute
  error: {
    status: number,
    text: string,
    back: {
      link: string,
      text: string,
    },
  },
  events?: ComponentEvent
}
