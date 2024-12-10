import { decode } from './decode';
import { log } from './log';

jest.mock('./log', () => ({
  log: { error: jest.fn() },
}));

it.each([
  ['&gt;', '>'],
  ['&gt;&gt;', '>>'],
  ['&lt;', '<'],
  ['&lt;&lt;', '<<'],
  ['&lt;&gt;', '<>'],
  ['&gt;&lt;', '><'],
  ['&lt;code&gt;', '<code>'],
])('decodes %j', (input, output) => {
  expect(decode(input)).toBe(output);
});

it.each([undefined, null, {}, [], true, false, 0, 1, () => {}, new Date()])(
  'does not decode invalid %p',
  (input) => {
    expect(decode(input as string)).toBe(input);
    expect(log.error).toHaveBeenCalledTimes(1);
    expect(log.error).toHaveBeenCalledWith(`Invalid string: ${input}`);
  },
);
