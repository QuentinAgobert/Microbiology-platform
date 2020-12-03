import React, { useState, useEffect } from "react";
// Styles
import styled from "styled-components";
// MicroState
import { MicroState } from "../microState";

const MicroContainer = () => {
    const [microOrganisms, setMicroOrganisms] = useState(MicroState);
    const [microOrganism, setMicroOrganism] = useState(null);
    useEffect(() => {
        const currentMicroOrganism = microOrganisms[0];
        setMicroOrganism(currentMicroOrganism);
    }, [microOrganisms]);
    return (
        <>
            {microOrganism && (
                <StyledMicroContainer>
                    <h1>Nom : {microOrganism.name}</h1>
                    <h2>Classification : {microOrganism.classification}</h2>
                    <p>Caractéristique : {microOrganism.caracteristics}</p>
                    <p>Compléments : {microOrganism.complements}</p>
                </StyledMicroContainer>
            )}
        </>
    );
};

const StyledMicroContainer = styled.div`
    padding: 1rem;
    h1 {
        font-size: 1.5rem;
        font-style: italic;
    }
    h2 {
        font-size: 1.2rem;
    }
    p {
        font-size: 1.0rem;
    }
`;

export default MicroContainer;