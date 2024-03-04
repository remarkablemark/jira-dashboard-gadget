import { view } from '@forge/bridge';

export type FullContext = Awaited<ReturnType<typeof view.getContext>>;
