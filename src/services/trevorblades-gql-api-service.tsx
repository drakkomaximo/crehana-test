import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  DocumentNode
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages{
        code
        name
        native
      }
    },
    continents {
      code
      name
      countries {
        code
        name
        native
        phone
        capital
        currency
        languages{
          code
          name
          native
        }
      }
    },
      languages{
        code
        name
        native
    }
  }
`;

export const GetTrevorbladesQqlApiService = (queryBody: DocumentNode = LIST_COUNTRIES) => {

  const { data, loading, error } = useQuery(queryBody, { client });

  return {
    data, loading, error
  }
}
