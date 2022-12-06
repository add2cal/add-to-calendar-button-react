export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['add-to-calendar-button']: CustomElement<AddToCalendarButton>;
    }
  }
}
