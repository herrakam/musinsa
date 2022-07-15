import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const SlectedFiltersWrap = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  width: 100%;
  height: 50px;
`;
export const filters = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  width: 325px;
  height: 100%;
  padding: 12px 15px;
  gap: 5px;
`;
export const Refresh = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 50px;
  height: 100%;
`;
export const SelectedFilter = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  gap: 7px;
  height: 26px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.backgroundColors.blue1};
  color: ${({ theme }) => theme.fontColors.white};
  border-radius: 4px;
  ${({ theme }) => theme.fontStyles.label}
`;
export const Cross = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 8px;
  height: 8px;
`;
