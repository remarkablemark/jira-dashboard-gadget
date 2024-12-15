import { NAME, VERSION } from '../env';

const PREFIX = `[${NAME}@${VERSION}]`;
const METHODS = ['error', 'info', 'warn'] as const;

const spies = METHODS.reduce(
  (accumulator, method) => {
    accumulator[method] = jest.spyOn(console, method).mockImplementation();
    return accumulator;
  },
  {} as Record<(typeof METHODS)[number], jest.SpyInstance>,
);

afterAll(() => {
  Object.entries(spies).forEach(([, spy]) => spy.mockRestore());
});

it.each(METHODS)('calls console.%s with prefix and message', (method) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { log } = require('./log');
  const message = 'message';
  expect(log[method](message)).toBe(undefined);
  expect(spies[method]).toHaveBeenCalledTimes(1);
  expect(spies[method]).toHaveBeenCalledWith(PREFIX, message);
});
