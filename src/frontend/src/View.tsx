import { useEffect, useState } from 'react';
import { view, invoke } from '@forge/bridge';
import type { FullContext } from './types';

export default function View() {
  const [context, setContext] = useState<FullContext>();
  const [data, setData] = useState<string>('');

  useEffect(() => {
    invoke<string>('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  if (!context || !data) {
    return 'Loading...';
  }

  return (
    <div>
      {data} {JSON.stringify(context.extension.gadgetConfiguration)}
    </div>
  );
}
