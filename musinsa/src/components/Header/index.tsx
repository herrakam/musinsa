import * as S from 'components/Header/styled.index';
import { ReactComponent as LogoImg } from 'images/logo_musinsa.svg';

function Header() {
  return (
    <S.HeaderWrap>
      <LogoImg aria-label="로고이미지" />
    </S.HeaderWrap>
  );
}

export default Header;
