import { fireEvent, render, screen } from '@testing-library/react';

import type { View } from '../types';
import Edit from './Edit';

const props = {
  formValues: {
    name: 'Name',
    description: 'Description',
  },
  view: { submit: jest.fn() } as unknown as View,
};

it.each(['Save', 'Cancel'])('renders button %p', (text) => {
  render(<Edit {...props} />);
  expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
});

it.each(['Name', 'Description'])('renders label %p', (text) => {
  render(<Edit {...props} />);
  expect(screen.getByLabelText(text)).toBeInTheDocument();
});

it('saves form', () => {
  render(<Edit {...props} />);
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'name' },
  });
  fireEvent.change(screen.getByLabelText('Description'), {
    target: { value: 'description' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Save' }));
  expect(props.view.submit).toHaveBeenCalledTimes(1);
  expect(props.view.submit).toHaveBeenCalledWith({
    name: 'name',
    description: 'description',
  });
});

it('cancels form', () => {
  render(<Edit {...props} />);
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'test' },
  });
  fireEvent.change(screen.getByLabelText('Description'), {
    target: { value: 'test' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
  expect(props.view.submit).toHaveBeenCalledTimes(1);
  expect(props.view.submit).toHaveBeenCalledWith(props.formValues);
});
