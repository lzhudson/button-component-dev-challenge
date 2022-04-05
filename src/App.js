import { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar';
import GlobalStyle from './styles/global';
import styles from './styles';

function App() {
  return (
    <ThemeProvider theme={styles}>
      <Sidebar />
      <GlobalStyle />
    </ThemeProvider>

  );
}

export default App;
