import { act } from '@testing-library/react';

afterAll(() => {
  jest.restoreAllMocks();
});

it('renders without crashing', async () => {
  const getElementByIdSpy = jest
    .spyOn(document, 'getElementById')
    .mockReturnValueOnce(document.createElement('div'));

  await act(async () => {
    const { root } = await import('.');
    root.unmount();
  });

  expect(getElementByIdSpy).toHaveBeenCalledTimes(1);
  expect(getElementByIdSpy).toHaveBeenCalledWith('root');
});
