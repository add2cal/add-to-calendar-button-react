import React from 'react';
import 'add-to-calendar-button';

type AddToCalendarButtonProps = {
  proKey?: string;
  name?: string;
  dates?: object | string;
  description?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  timeZone?: string;
  location?: string;
  status?: string;
  sequence?: number | string;
  uid?: string;
  organizer?: string;
  icsFile?: string;
  images?: string[] | string;
  recurrence?: string;
  recurrence_interval?: number | string;
  recurrence_until?: string;
  recurrence_count?: string;
  recurrence_byDay?: string;
  recurrence_byMonth?: string;
  recurrence_byMonthDay?: string;
  recurrence_weekstart?: string;
  availability?: string;
  created?: string;
  updated?: string;
  identifier?: string;
  subscribe?: boolean | string;
  options?: string[] | string;
  iCalFileName?: string;
  listStyle?: string;
  buttonStyle?: string;
  trigger?: string;
  hideIconButton?: boolean | string;
  hideIconList?: boolean | string;
  hideIconModal?: boolean | string;
  hideTextLabelButton?: boolean | string;
  hideTextLabelList?: boolean | string;
  hideBackground?: boolean | string;
  hideCheckmark?: boolean | string;
  hideBranding?: boolean | string;
  size?: string;
  label?: string;
  inlineRsvp?: string;
  customLabels?: object | string;
  customCss?: string;
  lightMode?: string;
  language?: string;
  hideRichData?: boolean | string;
  ty?: object | string;
  rsvp?: object | string;
  bypassWebViewCheck?: boolean | string;
  debug?: boolean | string;
  blockInteraction?: boolean | string;
  styleLight?: string;
  styleDark?: string;
  disabled?: boolean | string;
  hidden?: boolean | string;
  pastDateHandling?: string;
};

const AddToCalendarButton = (props: AddToCalendarButtonProps) => {
  const config = React.useMemo(() => {
    const outputData = {};
    for (const [key, value] of Object.entries(props)) {
      let newVal = value;
      if (typeof value !== 'string' && typeof value !== 'boolean') {
        newVal = JSON.stringify(value);
      }
      Object.assign(outputData, { [key]: newVal });
    }
    return outputData;
  }, [props]);
  return <add-to-calendar-button {...config}></add-to-calendar-button>;
};

export default AddToCalendarButton;
