import React from 'react';
import 'add-to-calendar-button';

export type AddToCalendarButtonProps = {
  proKey?: string;
  name?: string;
  dates?:
    | {
        name?: string;
        description?: string;
        startDate?: string;
        startTime?: string;
        endDate?: string;
        endTime?: string;
        timeZone?: string;
        location?: string;
        status?: 'TENTATIVE' | 'CONFIRMED' | 'CANCELLED' | string;
        sequence?: bigint;
        uid?: string;
        organizer?: string;
        attendee?: string;
      }[]
    | object
    | string;
  description?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  timeZone?: string;
  location?: string;
  status?: 'TENTATIVE' | 'CONFIRMED' | 'CANCELLED' | string;
  sequence?: number | string;
  uid?: string;
  organizer?: string;
  attendee?: string;
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
  availability?: 'busy' | 'free';
  created?: string;
  updated?: string;
  identifier?: string;
  subscribe?: boolean | string;
  options?: ('Apple' | 'Google' | 'iCal' | 'Microsoft365' | 'MicrosoftTeams' | 'Outlook.com' | 'Yahoo')[] | string[] | string;
  iCalFileName?: string;
  listStyle?: 'dropdown' | 'dropdown-static' | 'dropup-static' | 'overlay' | 'modal' | string;
  buttonStyle?: 'default' | '3d' | 'flat' | 'round' | 'neumorphism' | 'text' | 'date' | 'custom' | 'none' | string;
  trigger?: 'hover' | 'click' | string;
  inline?: boolean | string;
  buttonsList?: boolean | string;
  hideIconButton?: boolean | string;
  hideIconList?: boolean | string;
  hideIconModal?: boolean | string;
  hideTextLabelButton?: boolean | string;
  hideTextLabelList?: boolean | string;
  hideBackground?: boolean | string;
  hideCheckmark?: boolean | string;
  hideBranding?: boolean | string;
  hideButton?: boolean | string;
  size?: string;
  label?: string;
  inlineRsvp?: string;
  customLabels?: object | string;
  customCss?: string;
  lightMode?: 'system' | 'dark' | 'light' | 'bodyScheme' | string;
  language?: 'en' | 'de' | 'nl' | 'fa' | 'fr' | 'es' | 'et' | 'pt' | 'tr' | 'zh' | 'ar' | 'hi' | 'pl' | 'ro' | 'id' | 'no' | 'fi' | 'sv' | 'cs' | 'ja' | 'it' | 'ko' | 'vi' | string;
  hideRichData?: boolean | string;
  ty?: object | string;
  rsvp?: object | string;
  bypassWebViewCheck?: boolean | string;
  debug?: boolean | string;
  nonce?: string;
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
