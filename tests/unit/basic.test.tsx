import React from 'react';
import { expect, test } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { defaultProps } from '../mocks';
import { AddToCalendarButton, atcb_action, AddToCalendarButtonType, AddToCalendarActionType } from '../../src/index';

test('is imported and mounted', () => {
  expect(AddToCalendarButton).toBeTruthy();

  const component = render(<AddToCalendarButton debug {...defaultProps as AddToCalendarButtonType} />);

  expect(component).toBeTruthy();
  expect(component.container.querySelector('add-to-calendar-button')).toBeTruthy();
});

test('is rerendered based on prop', async () => {
  const { rerender } = render(<AddToCalendarButton debug lightMode="dark" {...defaultProps as AddToCalendarButtonType} />);

  expect(document.querySelector('.atcb-dark')).toBeTruthy();
  expect(document.querySelector('.atcb-light')).toBeFalsy();

  rerender(<AddToCalendarButton lightMode="light" {...defaultProps as AddToCalendarButtonType} />);

  expect(document.querySelector('.atcb-light')).toBeTruthy();
  expect(document.querySelector('.atcb-dark')).toBeFalsy();
});

test('is rendered via atcb_action', async () => {
  // create container div
  const wrapper = render(<div id="my-container"><button id="my-default-button"></button></div>);
  // ... and test for it
  const buttonElement = wrapper.container.querySelector('#my-default-button');
  expect(buttonElement).toBeTruthy();

  // test atcb_action
  if (buttonElement) atcb_action(defaultProps as AddToCalendarActionType, buttonElement as HTMLElement);

  await waitFor(() => {
    expect(wrapper.container.querySelector('[atcb-button-id="my-default-button"]')).toBeTruthy();
  });
});
