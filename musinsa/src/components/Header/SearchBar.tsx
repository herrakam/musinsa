import { isBtnClickedState } from 'atoms/isBtnClicked';
import * as S from 'components/Header/styled/styled.SearchBar';
import { ReactComponent as MagnifyGlass } from 'images/Combined_Shape.svg';
import { useRecoilValue } from 'recoil';

function SearchBar() {
  const isClicked = useRecoilValue(isBtnClickedState);
  return (
    <S.SearchBarWrap isClicked={isClicked}>
      <S.SearchBar>
        <S.SearchIcon>
          <MagnifyGlass />
        </S.SearchIcon>
        <S.SearchInput placeholder="상품명 검색" />
      </S.SearchBar>
    </S.SearchBarWrap>
  );
}

export default SearchBar;
