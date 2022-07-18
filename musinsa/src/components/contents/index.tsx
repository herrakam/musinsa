import { getData, useGetData, useGetInfiniteData } from 'api/api';
import { contentsState } from 'atoms/contents';
import * as S from 'components/contents/styled/styled.index';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { keyMaker } from 'utils/utils';
import Content from './content';

function Contents() {
  const [contents, setContents] = useRecoilState(contentsState);
  const [scrollY, setScrollY] = useState(0);
  const [apiIndex, setApiIndex] = useState(1);
  const ApiAmount = 3;
  const [realData, setRealData] = useState(useGetData('contents', apiIndex).data);

  const URL = `https://static.msscdn.net/musinsaUI/homework/data/goods${apiIndex}.json`;
  // const { status, data } = useGetData('contents', apiIndex);
  // useEffect(() => {
  //   if (status === 'error') <span>데이터를 가져오지 못했습니다</span>;
  //   if (status === 'loading') <span>Loading...</span>;
  //   if (status === 'success') setContents(contents.concat(data));
  // }, [status, data, apiIndex]);

  const { status, data } = useGetInfiniteData();
  console.log(data);
  useEffect(() => {
    if (status === 'error') <span>데이터를 가져오지 못했습니다</span>;
    if (status === 'loading') <span>Loading...</span>;
    if (status === 'success') setContents(contents.concat(data));
  }, [data, status]);
  function increaseApiIndex() {
    if (apiIndex < ApiAmount) {
      setApiIndex(apiIndex + 1);
      const data = getData(URL);
      console.log(data);
      // setContents(contents.concat(data));
    }
  }

  // function infiniteScroll() {
  //   if (apiIndex <= apiAmount) {
  //     const { status, data } = useGetData(
  //       'contents',
  //       `https://static.msscdn.net/musinsaUI/homework/data/goods${apiIndex}.json`,
  //     );
  //     if (status === 'success') {
  //       const newContents = [...contents, data];
  //       setContents(newContents);
  //       apiIndex += 1;
  //     }
  //   }
  // }
  // function getScrollLocation() {}
  return (
    <S.ContentsWrap
      onClick={() => {
        increaseApiIndex();
      }}
    >
      {contents.map((content) => {
        const key = keyMaker();
        return <Content key={key} content={content} />;
      })}
    </S.ContentsWrap>
  );
}

export default Contents;
