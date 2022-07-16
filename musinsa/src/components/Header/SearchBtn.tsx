import * as S from 'components/Header/styled/styled.SearchBtn';
import { ReactComponent as MagnifyGlass } from 'images/Combined_Shape.svg';
import { isBtnClickedState } from 'atoms/isBtnClicked';
import { useRecoilState } from 'recoil';

function SearchBtn() {
  const [isBtnClicked, setIsBtnClicked] = useRecoilState(isBtnClickedState);
  const toggleBtn = () => {
    setIsBtnClicked(!isBtnClicked);
  };
  return (
    <S.SearchBtnWrap
      isClicked={isBtnClicked}
      onClick={() => {
        toggleBtn();
      }}
    >
      검색
      <S.MagnifyFigure>
        <MagnifyGlass />
      </S.MagnifyFigure>
    </S.SearchBtnWrap>
  );
}

export default SearchBtn;
