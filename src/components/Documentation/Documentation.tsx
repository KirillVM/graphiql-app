import { CacheObject } from './Documentation.interface';
import styles from './Documentation.module.scss';
import Schema from './Schema/Schema';
import { SchemaData } from './Schema/Schema.interface';
import graphiqlApi from '@src/services/graphiqlApi/graphiqlApi';
import { getIntrospectionQuery } from 'graphql';

const cache = new Map();

const fetchData = function (url: string) {
  if (!cache.has(url)) {
    cache.set(url, { promise: getData(url), value: null });
  }
  return cache.get(url);
};

const getData = async function (graphiqlApiUrl: string) {
  return await graphiqlApi.baseQuery({
    // url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    // url: 'https://beta.pokeapi.co/graphql/v1beta',
    // url: 'https://spacex-production.up.railway.app',
    // url: 'https://rickandmortyapi.graphcdn.app/',
    url: graphiqlApiUrl,
    data: getIntrospectionQuery(),
  });
};

const use = function (dataFromCache: CacheObject) {
  if (dataFromCache.value) {
    return dataFromCache.value;
  } else {
    dataFromCache.promise.then((data: SchemaData) => {
      dataFromCache.value = data;
    });

    throw dataFromCache.promise;
  }
};

const Documentation = ({ url }: { url: string }) => {
  const data = use(fetchData(url));

  return (
    <div className={styles.container}>
      <Schema data={data.data} />
    </div>
  );
};

export default Documentation;
