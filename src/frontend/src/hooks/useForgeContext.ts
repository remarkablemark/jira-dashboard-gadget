import { view } from '@forge/bridge';
import { useEffect, useState } from 'react';

import type { FullContext } from '../types';

export function useForgeContext() {
  const [context, setContext] = useState<FullContext | undefined>();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  return context;
}
