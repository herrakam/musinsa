import * as S from 'components/Header/styled/styled.SelectedFilter';
import { ReactComponent as RefreshImg } from 'images/Refresh.svg';

function SelectedFilters() {
  return (
    <S.SlectedFiltersWrap>
      <S.filters>필터</S.filters>
      <S.Refresh>
        <RefreshImg />
      </S.Refresh>
    </S.SlectedFiltersWrap>
  );
}

export default SelectedFilters;
