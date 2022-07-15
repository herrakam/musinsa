import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const FilterWrap = styled.div<{ isClicked: boolean }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  min-width:72px;
  padding: 7px 13px;
  height: 35px;
  ${({ theme }) => theme.fontStyles.filter};
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray1};
  color: ${({ isClicked, theme }) => (isClicked ? `${theme.fontColors.blue1}` : 'black')};
`;
