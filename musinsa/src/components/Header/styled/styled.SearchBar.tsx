import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const SearchBarWrap = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 15px;
  background: ${({ theme }) => theme.backgroundColors.gray2};
`;

export const SearchBar = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  padding: 10px 8px;
  background: ${({ theme }) => theme.backgroundColors.white};
`;
export const SearchIcon = styled.figure`
  width: 22px;
  height: 22px;
`;
export const SearchInput = styled.input`
  width: 300px;
  height: 22px;
  ${({ theme }) => theme.fontStyles.input};
  color: ${({ theme }) => theme.fontColors.lightGray};
  :focus {
    outline: none;
    color: ${({ theme }) => theme.fontColors.black};
  }
`;
