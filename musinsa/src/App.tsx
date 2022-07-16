import Header from 'components/Header';
import { theme } from 'design/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'design/globalStyle';
import { RecoilRoot } from 'recoil';
import Contents from 'components/contents';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Header />
          <Contents />
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
