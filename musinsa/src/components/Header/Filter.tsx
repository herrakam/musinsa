import { filterState } from 'atoms/filter';
import * as S from 'components/Header/styled/styled.Filter';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

type FilterTitle = {
  title: string;
};

function Filter({ title }: FilterTitle) {
  const [filters, setFilters] = useRecoilState(filterState);
  const isSelected = filters.includes(title);
  const setSelectedFilter = () => {
    if (!filters.includes(title)) {
      setFilters([...filters, title]);
    } else {
      const removedFilters = [...filters];
      removedFilters.splice(filters.indexOf(title), 1);
      setFilters(removedFilters);
    }
  };
  return (
    <S.FilterWrap
      isClicked={isSelected}
      onClick={() => {
        setSelectedFilter();
      }}
    >
      {title}
    </S.FilterWrap>
  );
}

export default Filter;
