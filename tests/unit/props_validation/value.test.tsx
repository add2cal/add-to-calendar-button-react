import React from 'react';
import { expect, test, describe, vi } from 'vitest';
import { AddToCalendarButton, AddToCalendarButtonType } from '../../../src/index';
import { render } from '@testing-library/react';
import { defaultProps, invalidOptionsPropValue } from '../../mocks';

describe('props value validation', () => {
  test('throws error with invalid `option` prop value', () => {
    const spy = vi.spyOn(global.console, 'error');

    const config = {
      name: defaultProps.name,
      startDate: defaultProps.startDate,
      options: invalidOptionsPropValue,
      debug: true
    } as AddToCalendarButtonType;

    render(<AddToCalendarButton {...config} />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(`invalid option [${invalidOptionsPropValue.join().toLowerCase()}]`);
  });

  test('throws error with endDate before startDate', () => {
    const spy = vi.spyOn(global.console, 'error');

    render(<AddToCalendarButton {...defaultProps as AddToCalendarButtonType} debug startTime="14:00" endDate="2055-02-25" endTime="13:00" />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain('end date before start date');
  });

  test('throws error with invalid timezone', () => {
    const spy = vi.spyOn(global.console, 'error');

    render(<AddToCalendarButton {...defaultProps as AddToCalendarButtonType} debug startTime="14:00" endDate="2055-02-25" endTime="15:00" timeZone="Mars/FantasyCity" />);

    expect(spy).toHaveBeenCalledTimes(2); // 2 times, because the timeZones lib will also throw an error here.
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain('invalid time zone given');
  });
});
