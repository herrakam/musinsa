import { useGetData } from 'api/api';
import { contentsState } from 'atoms/contents';
import * as S from 'components/contents/styled/styled.index';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { keyMaker } from 'utils/utils';
import Content from './content';

function Contents() {
  const [contents, setContents] = useRecoilState(contentsState);
  const { status, data } = useGetData(
    'contents',
    'https://static.msscdn.net/musinsaUI/homework/data/goods1.json',
  );

  useEffect(() => {
    if (status === 'error') <span>데이터를 가져오지 못했습니다</span>;
    if (status === 'loading') <span>Loading...</span>;
    if (status === 'success') setContents(data);
  }, [data, status]);
  return (
    <S.ContentsWrap>
      {contents.map((content) => {
        const key = keyMaker();
        return <Content key={key} content={content} />;
      })}
    </S.ContentsWrap>
  );
}

export default Contents;
