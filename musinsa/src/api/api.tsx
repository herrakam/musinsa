import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

export const useGetData = (key: string, URL: string) => useQuery(key, () => getData(URL));

export const getData = async (URL: string) => {
  const { data } = await axios.get(URL);
  return data;
};
