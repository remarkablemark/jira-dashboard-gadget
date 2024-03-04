import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (request) => {
  // eslint-disable-next-line no-console
  console.log(request);
  return 'Hello world!';
});

export const handler = resolver.getDefinitions();
