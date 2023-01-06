
import styled from 'styled-components';

import AppRouter from './components/AppRouter';
import { GlobalStyle } from './components/UI/GlobalSyle';

const Body = styled.div`
  padding-right: 3rem;
  padding-left: 3rem;

  @media (max-width: 400px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Body>
        <AppRouter />
      </Body>
    </>
  );
}

export default App;
