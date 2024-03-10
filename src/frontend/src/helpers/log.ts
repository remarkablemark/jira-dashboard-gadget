/* eslint-disable no-console */
const NAME = `[${import.meta.env.VITE_APP_NAME}@${import.meta.env.VITE_APP_VERSION}]`;

const error = console.error.bind(null, NAME);
const info = console.info.bind(null, NAME);
const warn = console.warn.bind(null, NAME);

export const log = {
  error,
  info,
  warn,
};
