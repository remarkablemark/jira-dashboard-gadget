import { useForgeContext, useForgeInvoke } from 'src/hooks';

export default function View() {
  const context = useForgeContext();
  const data = useForgeInvoke<string>('getText', {
    example: 'my-invoke-variable',
  });

  if (!context || !data) {
    return 'Loading...';
  }

  return (
    <div>
      {data} {JSON.stringify(context.extension.gadgetConfiguration)}
    </div>
  );
}
