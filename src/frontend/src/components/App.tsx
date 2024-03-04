import { view } from '@forge/bridge';
import { useEffect, useState } from 'react';
import type { FullContext } from 'src/types';

import Edit from './Edit';
import View from './View';

export default function App() {
  const [context, setContext] = useState<FullContext>();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  if (!context) {
    return 'Loading...';
  }

  if (context.extension.entryPoint === 'edit') {
    return <Edit />;
  }

  return <View />;
}
