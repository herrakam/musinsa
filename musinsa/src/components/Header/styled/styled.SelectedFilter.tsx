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
`;
export const Refresh = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 50px;
  height: 100%;
`;
