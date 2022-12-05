import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { defaultProps } from '../mocks';
import { AddToCalendarButton } from '../../src/index';

test('is imported and mounted', () => {
  expect(AddToCalendarButton).toBeTruthy();

  const component = render(<AddToCalendarButton {...defaultProps} />);

  expect(component).toBeTruthy();
  expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
});

test('is rerendered based on prop', async () => {
  const initialLabel = 'Initial Label';
  const changedLabel = 'Changed Label';

  const {rerender} = render(<AddToCalendarButton label={initialLabel} {...defaultProps} />);

  expect(screen.getByText(initialLabel)).toBeTruthy();

  rerender(<AddToCalendarButton label={changedLabel} {...defaultProps} />);

  //expect(screen.getByText(changedLabel)).toBeTruthy();
});
