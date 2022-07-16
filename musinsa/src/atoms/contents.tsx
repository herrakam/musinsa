import { DataType } from 'api/api';
import { atom } from 'recoil';

type ContentsInitialStateType = {
  key: string;
  default: Array<DataType>;
};

const initialData: Array<DataType> = [];

const ContentsInitialState: ContentsInitialStateType = {
  key: 'contentsState',
  default: initialData,
};
export const contentsState = atom(ContentsInitialState);
