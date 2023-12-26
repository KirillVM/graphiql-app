import { useEffect, useState } from 'react';
import styles from './Documentation.module.scss';
import graphiqlApi from '@src/services/graphiqlApi/graphiqlApi';
import Schema from './Schema/Schema';
import { SchemaData } from './Schema/Schema.interface';

const Documentation = () => {
  const [data, setData] = useState<SchemaData | null>(null);

  const query = `query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      subscriptionType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await graphiqlApi.baseQuery({
          // url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
          url: 'https://rickandmortyapi.graphcdn.app/',
          data: query,
        });
        console.log(response);
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className={styles.container}>
      {data && <Schema data={data.data} />}
    </div>
  );
};

export default Documentation;
