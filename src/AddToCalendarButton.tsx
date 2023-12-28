import React from 'react';
import 'add-to-calendar-button';
import type { AddToCalendarButtonType } from 'add-to-calendar-button';

const AddToCalendarButton = (props: AddToCalendarButtonType) => {
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
