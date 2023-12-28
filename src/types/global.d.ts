import type { AddToCalendarButton } from './AddToCalendarButton';

export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['add-to-calendar-button']: CustomElement<AddToCalendarButton>;
    }
  }
}
