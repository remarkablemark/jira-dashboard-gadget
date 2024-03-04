import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';

import '@atlaskit/css-reset';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
