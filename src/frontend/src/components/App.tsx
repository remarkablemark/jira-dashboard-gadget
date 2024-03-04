import { useForgeContext } from 'src/hooks';

import Edit from './Edit';
import View from './View';

export default function App() {
  const context = useForgeContext();

  if (!context) {
    return 'Loading...';
  }

  if (context.extension.entryPoint === 'edit') {
    return <Edit />;
  }

  return <View />;
}
