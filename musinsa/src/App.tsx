import Header from 'components/Header';
import { theme } from 'design/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'design/globalStyle';
import { RecoilRoot } from 'recoil';
import Contents from 'components/contents';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <Header />
        <Contents />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
