import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { defaultProps } from '../mocks';
import { AddToCalendarButton } from '../../src/index';

test('is imported and mounted', () => {
  expect(AddToCalendarButton).toBeTruthy();

  const component = render(<AddToCalendarButton {...defaultProps} />);

  expect(component).toBeTruthy();
  expect(component.container.querySelector('add-to-calendar-button')).toBeTruthy();
});

test('is rerendered based on prop', async () => {
  const { rerender } = render(<AddToCalendarButton lightMode="dark" {...defaultProps} />);

  expect(document.querySelector('.atcb-dark')).toBeTruthy();
  expect(document.querySelector('.atcb-light')).toBeFalsy();

  rerender(<AddToCalendarButton lightMode="light" {...defaultProps} />);

  expect(document.querySelector('.atcb-light')).toBeTruthy();
  expect(document.querySelector('.atcb-dark')).toBeFalsy();
});
