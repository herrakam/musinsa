import Header from 'components/Header';
import { theme } from 'design/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'design/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
