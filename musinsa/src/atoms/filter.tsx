import { atom } from 'recoil';

type FilterInitialStateType = {
  key: string;
  default: Array<string>;
};

const initialData: Array<string> = [];

const filterInitialState: FilterInitialStateType = {
  key: 'filterState',
  default: initialData,
};
export const filterState = atom(filterInitialState);
