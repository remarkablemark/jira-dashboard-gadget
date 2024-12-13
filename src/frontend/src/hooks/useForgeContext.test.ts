import { view } from '@forge/bridge';
import { renderHook, waitFor } from '@testing-library/react';

import { log } from '../helpers';
import type { FullContext } from '../types';
import { useForgeContext } from './useForgeContext';

jest.mock('../helpers');

const mockedView = jest.mocked(view);

it.each([undefined, {}])('returns %p', async (context) => {
  mockedView.getContext.mockResolvedValueOnce(
    context as unknown as FullContext,
  );
  const { result } = renderHook(() => useForgeContext());

  await waitFor(() => {
    expect(result.current).toBe(context);
  });
});

it('catches error', async () => {
  const error = 'error';
  mockedView.getContext.mockRejectedValueOnce(error);
  const { result } = renderHook(() => useForgeContext());

  await waitFor(() => {
    expect(result.current).toBe(undefined);
    expect(log.error).toHaveBeenCalledTimes(1);
    expect(log.error).toHaveBeenCalledWith(error);
  });
});
