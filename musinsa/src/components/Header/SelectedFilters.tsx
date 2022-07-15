import { filterState } from 'atoms/filter';
import * as S from 'components/Header/styled/styled.SelectedFilter';
import { ReactComponent as RefreshImg } from 'images/Refresh.svg';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { keyMaker } from 'utils/utils';
import { ReactComponent as CrossImg } from 'images/Cross.svg';
import { isFilterClickedState } from 'atoms/isFilterClicked';

function SelectedFilters() {
  const [filters, setFilters] = useRecoilState(filterState);
  const isFilterClicked = useRecoilValue(isFilterClickedState);
  const removeFilter = (title: string) => {
    const removedFilters = [...filters];
    removedFilters.splice(filters.indexOf(title), 1);
    setFilters(removedFilters);
  };

  return (
    <S.SlectedFiltersWrap isClicked={isFilterClicked}>
      <S.filters>
        {filters.map((filter) => {
          const key = keyMaker();
          return (
            <S.SelectedFilter
              key={key}
              onClick={() => {
                removeFilter(filter);
              }}
            >
              {filter}
              <S.Cross>
                <CrossImg />
              </S.Cross>
            </S.SelectedFilter>
          );
        })}
      </S.filters>
      <S.Refresh onClick={useResetRecoilState(filterState)}>
        <RefreshImg />
      </S.Refresh>
    </S.SlectedFiltersWrap>
  );
}

export default SelectedFilters;
