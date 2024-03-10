import { view } from '@forge/bridge';

export type View = typeof view;

export type FullContext = Awaited<ReturnType<View['getContext']>>;
