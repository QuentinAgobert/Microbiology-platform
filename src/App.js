import React from "react";
// Styles
import styled from "styled-components";
// Components
import GlobalStyles from "./components/GlobalStyles";
import MicroContainer from "./components/MicroContainer";

function App() {
  return (
    <StyledApp>
        <GlobalStyles />
        <MicroContainer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
    padding-top: 3rem;
    padding-left: 3rem;
`;

export default App;
