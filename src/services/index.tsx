import { FC, useState } from "react";
import Flag from 'react-world-flags'
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
    }
  }
`;

export const TrevorbladesGqlApiService: FC<{queryBody?: DocumentNode}> = ({queryBody = LIST_COUNTRIES}) => {
    const [country, setCountry] = useState('US');
    const {data, loading, error} = useQuery(queryBody, {client});
    
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }

    console.log(data.countries, 'data')

    return (
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '1rem'
          }}
        >
          {data.countries.map((country: any) => (
            <div 
              key={country.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              border: '1px solid red',
              borderRadius: '20px',
              width: '30rem',
              height: '8rem',
            }}>
            <h1 style={{
              width: '20rem',
              textAlign: 'center'
            }}>{country.name}</h1>
            <Flag code={country.code} height="50" width='70' />
            </div>
          ))}
        </div>
      );
}