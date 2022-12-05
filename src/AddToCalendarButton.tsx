import React from 'react';

import { atcb_init } from 'add-to-calendar-button';

type AddToCalendarButtonProps = {
  proKey?: string,
  name?: string,
  dates?: object,
  description?: string,
  startDate?: string,
  startTime?: string,
  endDate?: string,
  endTime?: string,
  timeZone?: string,
  location?: string,
  status?: string,
  sequence?: number,
  uid?: string,
  organizer?: string,
  icsFile?: string,
  images?: string[],
  recurrence?: string,
  recurrence_interval?: number,
  recurrence_until?: string,
  recurrence_count?: string,
  recurrence_byDay?: string,
  recurrence_byMonth?: string,
  recurrence_byMonthDay?: string,
  recurrence_weekstart?: string,
  availability?: string,
  created?: string,
  updated?: string,
  identifier?: string,
  subscribe?: string,
  options?: string[],
  iCalFileName?: string,
  listStyle?: string,
  buttonStyle?: string,
  trigger?: string,
  icons?: string,
  textLabels?: string,
  buttonsList?: string,
  background?: string,
  checkmark?: string,
  branding?: string,
  size?: string,
  label?: string,
  ty?: object,
  rsvp?: object,
  inlineRsvp?: string,
  customLabels?: object,
  customCss?: string,
  lightMode?: string,
  language?: string,
  richData?: string,
  bypassWebViewCheck?: string
}

const AddToCalendarButton = (props:AddToCalendarButtonProps) => {
  const initializedButtons = React.useRef<string[]>();  
  React.useEffect(() => {
    // setting the style dynamically (better solution upcoming)
    const StylesheetUrl = (function () {
      const baseStyleUrl = 'https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb';
      if (props.buttonStyle != null && props.buttonStyle != '' && props.buttonStyle != 'default') {
        return baseStyleUrl + '-' + props.buttonStyle + '.min.css';
      }
      return baseStyleUrl + '.min.css';
    })();
    const existingStyleFile = document.getElementById('atcb-style-file');
    if (existingStyleFile != null) {
      existingStyleFile.remove();
    }
    const styleFile = document.createElement('link');
    styleFile.rel = 'stylesheet';
    styleFile.href = StylesheetUrl;
    styleFile.id = 'atcb-style-file';
    document.head.appendChild(styleFile);
    // rendering the button (currently not properly rerendering on props change - will also change soon)
    initializedButtons.current = atcb_init();
  }, [props]);
  // building the JSON string and placing the placeholder in the DOM
  const config = React.useMemo(() => {
    return JSON.stringify(props);
  }, [props]);
  return (<div className="atcb" style={{ display: 'none' }}>{config}</div>);
}

export default AddToCalendarButton;