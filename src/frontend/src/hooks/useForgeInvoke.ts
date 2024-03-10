import { invoke } from '@forge/bridge';
import { useEffect, useState } from 'react';

import { log } from '../helpers';

export function useForgeInvoke<T>(
  functionKey: string,
  invokePayload?: Record<string, unknown>,
) {
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    invoke<T>(functionKey, invokePayload).then(setData).catch(log.error);
  }, [functionKey, invokePayload]);

  return data;
}
