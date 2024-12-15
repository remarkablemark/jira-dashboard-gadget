/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  import('@atlaskit/css-reset');
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

export const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
