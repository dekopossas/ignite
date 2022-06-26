import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4uha0010zgp01t608g2htph/master',
  cache: new InMemoryCache()
});
