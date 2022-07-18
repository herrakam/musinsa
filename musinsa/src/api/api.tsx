import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

export type DataType = {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean;
  saleRate: number;
  isSoldOut: boolean;
  isExclusive: boolean;
};
export const useGetData = (key: string, apiIndex: number) => {
  const URL = `https://static.msscdn.net/musinsaUI/homework/data/goods${apiIndex}.json`;
  const { status, data } = useQuery(key, () => getData(URL), {
    refetchOnWindowFocus: false,
    retry: 1,
  });
  return { status, data };
};

export const getData = async (URL: string) => {
  const { data } = await axios.get(URL);

  return data.data.list;
};
export const getPagedData = async (pageIdx: number) => {
  const URL = `https://static.msscdn.net/musinsaUI/homework/data/goods${pageIdx}.json`;
  const { data } = await axios.get(URL);

  return { data: data.data.list, pageIdx };
};
export const useGetInfiniteData = () => {
  const { status, data } = useInfiniteQuery(
    ['moreContents'],
    ({ pageParam = 0 }) => getPagedData(pageParam),
    {
      getNextPageParam: ({ pageIdx }) => pageIdx + 1,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
  const realData = data?.pages;
  return { status, data: realData };
};
