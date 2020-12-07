import React from "react";
// Styles
import styled from "styled-components";
// Components
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Pages
import Home from "./pages/Home";
import MicroPage from "./pages/MicroPage";
// Router
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
  return (
    <StyledApp>
        <GlobalStyles />
        <Nav />
        <StyledBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/microorganismes">
                <MicroPage />
            </Route>
        </Switch>
    </StyledApp>
  );
}

const StyledBar = styled.div`
    width: 65%;
    margin: auto;
    margin-top: 1rem; 
    height: 5px;
    background: #9D1212;
`;

const StyledApp = styled.div`
`;

export default App;
