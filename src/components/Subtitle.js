import React from "react";
// Styles
import styled from "styled-components";
// Images
import Fleche from "../img/Fleche1.svg";

const Subtitle = () => {
    return (
        <StyledSubtitle>
            <h1>Bienvenue sur notre plateforme de microbiologie.</h1>
            <h2>Ici, vous trouverez tout ce dont vous avez besoin pour :</h2>
            <img src={Fleche} alt="fleche"/>
        </StyledSubtitle>
    );
};

const StyledSubtitle = styled.div`
    width: 60%;
    position: relative;
    h1 {
        font-size: 1.6rem;
    }
    h2 {
        font-size: 1.3rem;
        padding: 1rem;
    }
    img {
        position: absolute;
        right: 0%;
        top: 39%;
        text-align: right;
    }
`;

export default Subtitle;