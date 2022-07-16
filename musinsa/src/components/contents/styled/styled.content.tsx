import styled from 'styled-components';
import { mixin } from 'design/globalStyle';

export const ContentWrap = styled.div`
  height: 366px;
  margin-bottom: 20px;
`;
export const ContentTop = styled.figure`
  width: 100%;
  height: 266px;
  background-size: cover;
`;
export const ContentImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const ContentInfo = styled.div`
  ${mixin.flexbox({ dir: 'column', horizontal: 'center', vertical: 'flex-start' })};
  padding: 20px 10px;
  position: relative;
`;
export const ExclusiveLabel = styled.div<{ isExclusive: boolean }>`
  position: absolute;
  top: -15px;
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  display: ${({ isExclusive }) => (isExclusive ? 'flex' : 'none')};
  width: 33px;
  height: 26px;
  padding: 4px 4px;
  background: ${({ theme }) => theme.backgroundColors.peach};
  color: ${({ theme }) => theme.fontColors.white};
  ${({ theme }) => theme.fontStyles.label};
`;
export const BrandTitle = styled.div`
  height: 16px;
  ${({ theme }) => theme.fontStyles.brandTitle};
`;
export const ContentName = styled.div`
  width: 100%;
  height: 28px;
  ${({ theme }) => theme.fontStyles.productTitle};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const PriceAndDiscount = styled.div`
  width: 100%;
  height: 24px;
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  margin-top: 4px;
`;
export const Price = styled.div`
  height: 100%;
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.finalPriceANdSale};
`;
export const DiscountRate = styled.div`
  height: 100%;
  ${mixin.flexbox({ horizontal: 'flex-end', vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.finalPriceANdSale};
  color: ${({ theme }) => theme.fontColors.red};
`;
export const OriginalPrice = styled.div`
  width: 100%;
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  height: 12px;
  ${({ theme }) => theme.fontStyles.originPrice};
  color: ${({ theme }) => theme.fontColors.lightGray};
  text-decoration: line-through;
`;
