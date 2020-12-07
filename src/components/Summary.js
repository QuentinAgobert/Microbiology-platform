import React from "react";
// Styles
import styled from "styled-components";
// Images
import Bacteria from "../img/Bacteria.svg";
import Culture from "../img/Culture.svg";
import Arbre from "../img/Arbre.svg";
import Identification from "../img/Identification.svg";
import Techniques from "../img/Techniques.svg";

const Summary = () => {
    return (
        <StyledSummary>
            <h1>Voici les différentes ressources qui vous sont proposées.</h1>
            <ul>
                <li>
                    <img src={Bacteria} alt="Bacteria"/>
                    <h2>Micro-organismes</h2>
                    <p>Les micro-organismes à connaître, leurs classification, caractéristiques et d'autres informations.</p>
                </li>
                <li>
                    <img src={Culture} alt="Culture"/>
                    <h2>Milieux de culture</h2>
                    <p>Les milieux de culture à connaître, leur composition, leur lecture.</p>
                </li>
                <li>
                    <img src={Identification} alt="Identification"/>
                    <h2>Test d'identification</h2>
                    <p>Les tests d'identification à connaître, leur principe, les résultats.</p>
                </li>
                <li>
                    <img src={Arbre} alt="Arbre"/>
                    <h2>Arbre d'identification</h2>
                    <p>Les arbres d'identification classiques.</p>
                </li>
                <li>
                    <img src={Techniques} alt="Techniques"/>
                    <h2>Techniques</h2>
                    <p>Les techniques à connaître.</p>
                </li>
            </ul>
        </StyledSummary>
    );
};

const StyledSummary = styled.div`
    //background: lightblue;
    width: 60%;
    padding: 1rem;
    h1 {
        font-size: 1.3rem;
        padding-bottom: 1rem;
    }
    ul {
        li {
            display: flex;
            img {
                width: 10%;
            }
            h2 {
                font-size: 1rem;
            }
        }
    }
`;

export default Summary;