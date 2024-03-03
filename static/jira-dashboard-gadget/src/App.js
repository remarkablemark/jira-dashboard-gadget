import React, { useEffect, useState } from 'react';
import { view } from '@forge/bridge';
import View from './View';
import Edit from './Edit';

function App() {
  const [context, setContext] = useState();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  if (!context) {
    return 'Loading...';
  }

  return context.extension.entryPoint === 'edit' ? <Edit/> : <View/>;
}

export default App;
