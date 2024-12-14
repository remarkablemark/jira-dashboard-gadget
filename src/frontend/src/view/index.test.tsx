import { render, screen } from '@testing-library/react';

import { useForgeContext, useForgeInvoke } from '../hooks';
import type { FullContext } from '../types';
import View from '.';

jest.mock('../hooks', () => ({
  useForgeContext: jest.fn(),
  useForgeInvoke: jest.fn(),
}));

jest.mock('./View', () => () => <>View</>);

const mockedUseForgeContext = jest.mocked(useForgeContext);
const mockedUseForgeInvoke = jest.mocked(useForgeInvoke);

it('renders loading spinner', () => {
  render(<View />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});

it('renders view', () => {
  mockedUseForgeContext.mockReturnValueOnce({
    extension: { gadgetConfiguration: undefined },
  } as unknown as FullContext);
  mockedUseForgeInvoke.mockReturnValueOnce('text');

  render(<View />);
  expect(screen.queryByLabelText('Loading')).not.toBeInTheDocument();
  expect(screen.getByText('View')).toBeInTheDocument();
});
