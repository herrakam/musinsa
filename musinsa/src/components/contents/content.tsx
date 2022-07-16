import * as S from 'components/contents/styled/styled.content';
import { DataType } from 'api/api';
import React from 'react';

type ContentType = {
  content: DataType;
};
function Content({ content }: ContentType) {
  const altImage = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
  const imageOnErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = altImage;
  };

  return (
    <S.ContentWrap>
      <S.ContentTop>
        <S.ContentImg
          src={content.imageUrl}
          onError={(e) => {
            imageOnErrorHandler(e);
          }}
        />
      </S.ContentTop>
      <S.ContentInfo>
        <S.ExclusiveLabel isExclusive={content.isExclusive}>단독</S.ExclusiveLabel>
        <S.BrandTitle>{content.brandName}</S.BrandTitle>
        <S.ContentName>{content.goodsName}</S.ContentName>
        <S.PriceAndDiscount>
          <S.Price>{content.price.toLocaleString()}원</S.Price>
          <S.DiscountRate>{content.saleRate}%</S.DiscountRate>
        </S.PriceAndDiscount>
        <S.OriginalPrice>{content.normalPrice}원</S.OriginalPrice>
      </S.ContentInfo>
    </S.ContentWrap>
  );
}

export default Content;
