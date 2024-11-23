import { view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import App from './App';

jest.mock('../edit', () => () => <>edit</>);
jest.mock('../view', () => () => <>view</>);

const mockedView = jest.mocked(view);

it('renders loading icon', () => {
  render(<App />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});

it.each(['edit', 'view'])('renders %s', async (entryPoint) => {
  mockedView.getContext.mockResolvedValueOnce({
    extension: { entryPoint },
  } as unknown as FullContext);
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(entryPoint)).toBeInTheDocument();
  });
});
