import axios from 'axios';
import { useQuery } from 'react-query';

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
export const useGetData = (key: string, URL: string) => {
  const { status, data } = useQuery(key, () => getData(URL), {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  return { status, data };
};

export const getData = async (URL: string) => {
  const { data } = await axios.get(URL);

  return data.data.list;
};
