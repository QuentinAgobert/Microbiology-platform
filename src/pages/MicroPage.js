import React from "react";
// Styles
import styled from "styled-components";
// Components
import MicroNav from "../components/MicroNav";
import MicroContainer from "../components/MicroContainer";
// Router
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

const MicroPage = () => {
    const location = useLocation();
    return (
        <StyledMicroPage>
            <MicroNav />
            <Switch>
                <Route path="/microorganismes/Emilio">
                    <MicroContainer />
                </Route>
            </Switch>
        </StyledMicroPage>
    );
};

const StyledMicroPage = styled.div`
    background: lightblue;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
`;

export default MicroPage;
