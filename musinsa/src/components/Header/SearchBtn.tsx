import * as S from 'components/Header/styled/styled.SearchBtn';
import { useState } from 'react';
import { ReactComponent as MagnifyGlass } from 'images/Combined_Shape.svg';

function SearchBtn() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleBtn = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.SearchBtnWrap
      isClicked={isClicked}
      onClick={() => {
        toggleBtn();
      }}
    >
      검색
      <MagnifyGlass />
    </S.SearchBtnWrap>
  );
}

export default SearchBtn;
