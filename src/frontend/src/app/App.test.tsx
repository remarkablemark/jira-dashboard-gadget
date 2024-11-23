import { render, screen } from '@testing-library/react';

import App from './App';

it('renders loading icon', async () => {
  render(<App />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});
