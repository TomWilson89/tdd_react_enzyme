module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  // TODO: update return value  for redux / context implementation
  getSecretWord: jest.fn().mockReturnValue({ type: 'mock' }),
};
