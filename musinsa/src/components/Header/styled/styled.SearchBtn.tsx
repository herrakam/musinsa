import styled from 'styled-components';
// import { mixin } from 'design/globalStyle';
import { FilterWrap } from './styled.Filter';

export const SearchBtnWrap = styled(FilterWrap)<{ isClicked: boolean }>`
  gap: 7px;
  color: ${({ isClicked, theme }) =>
    isClicked ? `${theme.fontColors.white}` : `${theme.fontColors.black}`};
  background: ${({ isClicked, theme }) =>
    isClicked ? `${theme.backgroundColors.blue1}` : `${theme.backgroundColors.white}`};
`;
export const MagnifyFigure = styled.figure`
  width: 18px;
  height: 18px;
`;
