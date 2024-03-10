import Spinner from '@atlaskit/spinner';

import Edit from '../edit';
import { useForgeContext } from '../hooks';
import View from '../view';

export default function App() {
  const context = useForgeContext();

  if (!context) {
    return <Spinner label="Loading" />;
  }

  return context.extension.entryPoint === 'edit' ? <Edit /> : <View />;
}
