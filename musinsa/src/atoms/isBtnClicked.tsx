import { atom } from 'recoil';

type BtnClickedType = {
  key: string;
  default: boolean;
};

const initialData: boolean = false;
const BtnClickedInitialState: BtnClickedType = {
  key: 'isBtnClickedState',
  default: initialData,
};

export const isBtnClickedState = atom(BtnClickedInitialState);
