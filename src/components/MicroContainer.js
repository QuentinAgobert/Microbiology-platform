import React from "react";
// Styles
import styled from "styled-components";

const MicroContainer = ({ microOrganism }) => {
    return (
        <>
            {microOrganism && (
                <StyledMicroContainer>
                    <StyledMicroInfos>
                        <h1>Nom : {microOrganism.name}</h1>
                        <h2>Classification : {microOrganism.classification}</h2>
                        <p>Caractéristique : {microOrganism.caracteristics}</p>
                        <p>Compléments : {microOrganism.complements}</p>
                    </StyledMicroInfos>
                    <StyledMicroImages>
                        <img src={microOrganism.gramImg} alt="Gram"/>
                        <h3>Gram de {microOrganism.name}</h3>
                        <img src={microOrganism.cultureImg} alt="Culture"/>
                        <h3>Culture de {microOrganism.name}</h3>
                    </StyledMicroImages>
                </StyledMicroContainer>
            )}
        </>
    );
};

const StyledMicroContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: lightcoral;
    width: 100%;
`;

const StyledMicroInfos = styled.div`
    background: lightgreen;
    width: 100%;
    display: flex;
    flex-direction: column;
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

const StyledMicroImages = styled.div`
    background: #FAE7E6;
    border: solid 2px #56423E;
    height: 100%;
    border-radius: 40px;
    padding: 1rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
    }
    h3 {
        font-size: 1rem;
        font-weight: medium;
        padding-bottom: 1rem;
    }
`;

export default MicroContainer;