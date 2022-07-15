import * as S from 'components/Header/styled/styled.index';
import { ReactComponent as LogoImg } from 'images/logo_musinsa.svg';
import { keyMaker } from 'utils/utils';
import Filter from './Filter';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SelectedFilters from './SelectedFilters';

function Header() {
  const filterTitles: Array<string> = ['세일상품', '단독상품', '품절포함'];
  return (
    <S.HeaderWrap>
      <S.Logo>
        <LogoImg aria-label="로고이미지" />
      </S.Logo>
      <S.Filters>
        <SearchBtn />
        {filterTitles.map((filter) => {
          const key = keyMaker();
          return <Filter key={key} title={filter} />;
        })}
      </S.Filters>
      <SearchBar />
      <SelectedFilters />
      <S.Devide />
    </S.HeaderWrap>
  );
}

export default Header;
