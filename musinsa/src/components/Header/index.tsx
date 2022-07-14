import * as S from 'components/Header/styled/styled.index';
import { ReactComponent as LogoImg } from 'images/logo_musinsa.svg';
import { keyMaker } from 'utils/utils';
import Filter from './Filter';
import SearchBtn from './SearchBtn';

function Header() {
  const filterTitles: Array<string> = ['세일상품', '단독상품', '품절포함'];
  return (
    <div>
      <S.HeaderWrap>
        <LogoImg aria-label="로고이미지" />
      </S.HeaderWrap>
      <S.Filters>
        <SearchBtn />
        {filterTitles.map((filter) => {
          const key = keyMaker();
          return <Filter key={key} title={filter} />;
        })}
      </S.Filters>
    </div>
  );
}

export default Header;
