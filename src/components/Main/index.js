import PropTypes from 'prop-types';
import { Container } from './style';

export default function Main({ children }) {
  return (
    <main>
      <Container>
        {children}
      </Container>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
