import Spinner from '@atlaskit/spinner';
import { view } from '@forge/bridge';

import { useForgeContext } from '../hooks';
import Edit from './Edit';

export default function EditContext() {
  const context = useForgeContext();

  if (!context) {
    return <Spinner label="Loading" />;
  }

  return (
    <Edit formValues={context.extension.gadgetConfiguration} view={view} />
  );
}
