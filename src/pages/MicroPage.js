import React, { useState } from "react";
// Styles
import styled from "styled-components";
// Components
import MicroNav from "../components/MicroNav";
import MicroContainer from "../components/MicroContainer";
// Router
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
// MicroState
import { MicroState } from "../microState";

const MicroPage = () => {
    const location = useLocation();
    const [microOrganisms, setMicroOrganisms] = useState(MicroState);
    return (
        <StyledMicroPage>
            <MicroNav microOrganisms={microOrganisms} />
            <Switch>
                { microOrganisms.map((microOrganism) => (
                    <Route path={`/microorganismes/${microOrganism.name}`}>
                        <MicroContainer microOrganism={microOrganism} />
                    </Route>
                )) }
            </Switch>
        </StyledMicroPage>
    );
};

const StyledMicroPage = styled.div`
    background: lightblue;
    margin: auto;
    margin-top: 2rem;
    width: 60%;
    display: flex;
    flex-direction: row;
`;

export default MicroPage;
