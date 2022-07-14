import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const HeaderWrap = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 375px;
  height: 50px;
`;
export const Filters = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  width: 100%;
  gap: 5px;
  padding: 10px 7px;
  height: 55px;
`;
