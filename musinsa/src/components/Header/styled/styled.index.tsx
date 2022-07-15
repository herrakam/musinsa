import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const HeaderWrap = styled.div`
  width: 375px;
`;
export const Logo = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 100%;
  height: 50px;
`;
export const Filters = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  width: 100%;
  gap: 5px;
  padding: 10px 7px;
  height: 55px;
`;
