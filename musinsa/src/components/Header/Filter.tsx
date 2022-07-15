import { filterState } from 'atoms/filter';
import { isFilterClickedState } from 'atoms/isFilterClicked';
import * as S from 'components/Header/styled/styled.Filter';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

type FilterTitle = {
  title: string;
};

function Filter({ title }: FilterTitle) {
  const [filters, setFilters] = useRecoilState(filterState);
  const isClicked = filters.includes(title);
  const setIsFilterClicked = useSetRecoilState(isFilterClickedState);

  const setSelectedFilter = () => {
    if (!filters.includes(title)) {
      setFilters([...filters, title]);
    } else {
      const removedFilters = [...filters];
      removedFilters.splice(filters.indexOf(title), 1);
      setFilters(removedFilters);
    }
  };
  const toggleSelectedFilters = () => {
    if (filters.length !== 0) {
      setIsFilterClicked(true);
    } else {
      setIsFilterClicked(false);
    }
  };
  useEffect(() => {
    toggleSelectedFilters();
  }, [filters]);
  return (
    <S.FilterWrap
      isClicked={isClicked}
      onClick={() => {
        setSelectedFilter();
      }}
    >
      {title}
    </S.FilterWrap>
  );
}

export default Filter;
