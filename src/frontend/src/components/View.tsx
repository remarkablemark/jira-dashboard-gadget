import { invoke } from '@forge/bridge';
import { useEffect, useState } from 'react';
import { useForgeContext } from 'src/hooks';

export default function View() {
  const context = useForgeContext();
  const [data, setData] = useState<string>('');

  useEffect(() => {
    invoke<string>('getText', { example: 'my-invoke-variable' }).then(setData);
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
