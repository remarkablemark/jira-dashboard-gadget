import Spinner from '@atlaskit/spinner';

import { useForgeContext, useForgeInvoke } from '../hooks';
import View from './View';

export default function ViewContext() {
  const context = useForgeContext();
  const text = useForgeInvoke<string>('getText', {
    example: 'my-invoke-variable',
  });

  if (!context || !text) {
    return <Spinner label="Loading" />;
  }

  return (
    <View formValues={context.extension.gadgetConfiguration} text={text} />
  );
}
