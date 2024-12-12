import { invoke } from '@forge/bridge';
import { renderHook, waitFor } from '@testing-library/react';

import { log } from '../helpers';
import { useForgeInvoke } from './useForgeInvoke';

jest.mock('../helpers');

const mockedInvoke = jest.mocked(invoke);
const functionKey = 'key';
const invokePayload = {};

it.each([undefined, {}])('returns %p', async (data) => {
  mockedInvoke.mockResolvedValueOnce(data);
  const { result } = renderHook(() =>
    useForgeInvoke(functionKey, invokePayload),
  );

  await waitFor(() => {
    expect(invoke).toHaveBeenCalledTimes(1);
    expect(invoke).toHaveBeenCalledWith(functionKey, invokePayload);
    expect(result.current).toBe(data);
  });
});

it('catches error', async () => {
  const error = 'error';
  mockedInvoke.mockRejectedValueOnce(error);
  const { result } = renderHook(() =>
    useForgeInvoke(functionKey, invokePayload),
  );

  await waitFor(() => {
    expect(invoke).toHaveBeenCalledTimes(1);
    expect(invoke).toHaveBeenCalledWith(functionKey, invokePayload);
    expect(result.current).toBe(undefined);
    expect(log.error).toHaveBeenCalledTimes(1);
    expect(log.error).toHaveBeenCalledWith(error);
  });
});
