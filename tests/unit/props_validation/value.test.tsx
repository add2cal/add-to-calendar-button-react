import React from 'react';
import { expect, test, describe, vi } from 'vitest';
import { AddToCalendarButton } from '../../../src/index';
import { render } from '@testing-library/react';
import { defaultProps, invalidOptionsPropValue } from '../../mocks';

describe('props value validation', () => {
  test('is rendered with proper-value properties', () => {
    const component = render(<AddToCalendarButton {...defaultProps} />);

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered with invalid `option` prop value', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(<AddToCalendarButton name={defaultProps.name} startDate={defaultProps.startDate} options={invalidOptionsPropValue} />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      `invalid option [${invalidOptionsPropValue.join().toLowerCase()}]`
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });

  test('is not rendered with endDate before startDate', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(<AddToCalendarButton {...defaultProps} startTime="14:00" endDate="2055-02-25" endTime="13:00" />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      'end date before start date'
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });

  test('is rendered with proper `timeZone` prop value', () => {
    const component = render(<AddToCalendarButton {...defaultProps} startTime="14:00" endDate="2055-02-25" endTime="15:00" timeZone="Europe/Paris" />);

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered with invalid timezone', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(<AddToCalendarButton {...defaultProps} startTime="14:00" endDate="2055-02-25" endTime="15:00" timeZone="Mars/FantasyCity" />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      'invalid time zone given'
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });
});
