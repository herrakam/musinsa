import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const HeaderWrap = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 100%;
  height: 50px;
`;
