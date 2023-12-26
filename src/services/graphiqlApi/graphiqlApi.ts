import axios from 'axios';
import axiosRequest from '../../axios/axiosRequest';

const graphiqlApi = {
  baseQuery: async ({ url, data }: { url: string; data: string }) => {
    try {
      const result = axiosRequest({
        url: url,
        method: 'post',
        data: JSON.stringify({
          query: data,
        }),
      });
      return (await result).data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return err.response?.data;
      }
    }
  },
};

export default graphiqlApi;
