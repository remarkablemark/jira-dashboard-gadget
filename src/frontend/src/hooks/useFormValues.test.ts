import { act, renderHook } from '@testing-library/react';

import type { FullContext } from '../types';
import { useForgeContext } from './useForgeContext';
import { useFormValues } from './useFormValues';

jest.mock('./useForgeContext');

const mockedUseForgeContext = jest.mocked(useForgeContext);

it.each([undefined, null])('returns undefined for %p', (context) => {
  mockedUseForgeContext.mockReturnValueOnce(context as unknown as FullContext);
  const { result } = renderHook(() => useFormValues());

  act(() => {
    expect(result.current).toBe(undefined);
  });
});

it('sets form values', () => {
  const formValues = {
    key: 'value',
    encoded: '&lt;&gt;',
  };

  mockedUseForgeContext.mockReturnValueOnce({
    extension: { gadgetConfiguration: formValues },
  } as unknown as FullContext);
  const { result } = renderHook(() => useFormValues());

  act(() => {
    expect(result.current).toEqual({
      key: 'value',
      encoded: '<>',
    });
  });
});
