import { atom } from 'recoil';

type FilterClickedType = {
  key: string;
  default: boolean;
};

const initialData: boolean = false;
const filterClickedInitialState: FilterClickedType = {
  key: 'isFilterClickedState',
  default: initialData,
};

export const isFilterClickedState = atom(filterClickedInitialState);
