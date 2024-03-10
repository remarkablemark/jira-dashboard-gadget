/* eslint-disable no-console */
const NAME = `[${import.meta.env.VITE_APP_NAME}@${import.meta.env.VITE_APP_VERSION}]`;

export const log = {
  error: console.error.bind(null, NAME),
  info: console.info.bind(null, NAME),
  warn: console.warn.bind(null, NAME),
};
