import React, { useEffect, useState } from 'react';
import { view, invoke } from '@forge/bridge';

function View() {
  const [context, setContext] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
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

export default View;
