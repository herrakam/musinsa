import { DataType } from 'api/api';

type ContentType = {
  content: DataType;
};
function Content({ content }: ContentType) {
  return <div>{content.goodsName}</div>;
}

export default Content;
