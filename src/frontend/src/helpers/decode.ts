import { log } from './log';

/**
 * Decode HTML entities.
 *
 * @param text - Encoded string.
 * @returns - Decoded string.
 */
export function decode(text: string) {
  if (typeof text !== 'string') {
    log.error(`Invalid string: ${text}`);
  }
  return text.replaceAll('&gt;', '>').replaceAll('&lt;', '<');
}
