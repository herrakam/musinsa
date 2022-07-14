import * as S from 'components/Header/styled/styled.Filter';
import { useState } from 'react';

type FilterTitle = {
  title: string;
};

function Filter({ title }: FilterTitle) {
  const [isclicked, setIsClicked] = useState(false);
  const ToggleFilter = () => {
    setIsClicked(!isclicked);
  };
  return (
    <S.FilterWrap
      isClicked={isclicked}
      onClick={() => {
        ToggleFilter();
      }}
    >
      {title}
    </S.FilterWrap>
  );
}

export default Filter;
