/* eslint-disable no-console */
import { NAME, VERSION } from '../env';

const PREFIX = `[${NAME}@${VERSION}]`;

const error = console.error.bind(null, PREFIX);
const info = console.info.bind(null, PREFIX);
const warn = console.warn.bind(null, PREFIX);

export const log = {
  error,
  info,
  warn,
};
