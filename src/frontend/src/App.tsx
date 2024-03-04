import { view } from '@forge/bridge';
import { useEffect, useState } from 'react';

import Edit from './Edit';
import type { FullContext } from './types';
import View from './View';

export default function App() {
  const [context, setContext] = useState<FullContext>();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  if (!context) {
    return 'Loading...';
  }

  return context.extension.entryPoint === 'edit' ? <Edit /> : <View />;
}
