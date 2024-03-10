import Edit from '../edit';
import { useForgeContext } from '../hooks';
import View from '../view';

export default function App() {
  const context = useForgeContext();

  if (!context) {
    return 'Loading...';
  }

  return context.extension.entryPoint === 'edit' ? <Edit /> : <View />;
}
