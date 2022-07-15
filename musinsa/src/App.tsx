import Header from 'components/Header';
import { theme } from 'design/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'design/globalStyle';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
