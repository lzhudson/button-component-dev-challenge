import { ThemeProvider } from 'styled-components';
import Sidebar from '../Sidebar';
import GlobalStyle from '../../styles/global';
import styles from '../../styles';
import Main from '../Main';
import { Title } from '../Title';
import { Container } from './style';
import { ComponentUsage } from '../ComponentUsage';
import { Button } from '../Button';

function App() {
  return (
    <ThemeProvider theme={styles}>
      <Container>
        <Sidebar />
        <Main>
          <section>
            <Title>Buttons</Title>
            <ComponentUsage componentText="<Button/>">
              <Button>Default</Button>
            </ComponentUsage>
          </section>
        </Main>
      </Container>
      <GlobalStyle />
    </ThemeProvider>

  );
}

export default App;
