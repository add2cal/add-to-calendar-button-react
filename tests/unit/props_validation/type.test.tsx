import React from 'react';
import { expect, test, describe, vi } from 'vitest';
import { AddToCalendarButton } from '../../../src/index';
import { render } from '@testing-library/react';
import { defaultProps } from '../../mocks';

describe('props type validation', () => {
  test('is rendered with proper-type properties', () => {
    const component = render(<AddToCalendarButton {...defaultProps} sequence={1} />);

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered with wrong types `options` prop', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(<AddToCalendarButton name={defaultProps.name} startDate={defaultProps.startDate} options="['Google', 'iCal']" />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain('invalid option [[]');
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });
});
