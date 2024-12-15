import { render, screen } from '@testing-library/react';

import { useForgeContext } from '../hooks';
import type { FullContext } from '../types';
import Edit from '.';

jest.mock('../hooks', () => ({
  useForgeContext: jest.fn(),
}));

jest.mock('./Edit', () => () => <>Edit</>);

const mockedUseForgeContext = jest.mocked(useForgeContext);

it('renders loading icon', () => {
  mockedUseForgeContext.mockReturnValue(undefined);
  render(<Edit />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});

it('renders edit', () => {
  mockedUseForgeContext.mockReturnValue({
    extension: { gadgetConfiguration: {} },
  } as unknown as FullContext);
  render(<Edit />);
  expect(screen.getByText('Edit')).toBeInTheDocument();
});
