// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('@forge/bridge', () => ({
  invoke: jest.fn().mockResolvedValue(undefined),
  view: {
    getContext: jest.fn().mockResolvedValue(undefined),
    submit: jest.fn(),
  },
}));

jest.mock('../src/env');

afterEach(() => {
  jest.clearAllMocks();
});
