import { invoke, view } from '@forge/bridge';
import { useEffect, useState } from 'react';
import type { FullContext } from 'src/types';

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
