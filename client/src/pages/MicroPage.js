import React, { useState, Fragment } from "react";
// Styles
import styled from "styled-components";
// Components
import MicroNav from "../components/MicroNav";
import MicroContainer from "../components/MicroContainer";
import AddMicroOrganism from "../components/AddMicroOrganism";
import MicroList from "../components/MicroList";
// Router
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

const MicroPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <MicroNav />
                </div>
                <div className="col-sm-10">
                    {/* <MicroList /> */}
                </div>
            </div>
        </div>
        // <StyledMicroPage>
        //     <MicroNav microOrganisms={microOrganisms} />
        //     <Switch>
        //         { microOrganisms.map((microOrganism) => (
        //             <Route path={`/microorganismes/${microOrganism.name}`}>
        //                 <MicroContainer microOrganism={microOrganism} />
        //             </Route>
        //         )) }
        //     </Switch>
        // </StyledMicroPage>
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
