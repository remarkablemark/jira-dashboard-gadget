import { render, screen } from '@testing-library/react';

import View from './View';

it('renders text', () => {
  const props = {
    formValues: { name: 'name', description: 'description' },
    text: 'text',
  };
  render(<View {...props} />);
  expect(
    screen.getByText(`${props.text} ${JSON.stringify(props.formValues)}`),
  ).toBeInTheDocument();
});
