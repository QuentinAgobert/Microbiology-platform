import React from "react";
// Styles
import styled from "styled-components";
// Images
import Bacteria from "../img/Bacteria.svg";
import Culture from "../img/Culture.svg";
import Arbre from "../img/Arbre.svg";
import Identification from "../img/Identification.svg";
import Techniques from "../img/Techs.svg";

const Summary = () => {
    return (
        <StyledSummary>
            <h1>Voici les différentes ressources qui vous sont proposées.</h1>
            <ul>
                <li>
                    <img src={Bacteria} alt="Bacteria"/>
                    <p><strong>Micro-organismes : </strong> Les micro-organismes à connaître, leurs classification, caractéristiques et d'autres informations.</p>
                </li>
                <li>
                    <img src={Culture} alt="Culture"/>
                    <p><strong>Milieux de culture : </strong> Les milieux de culture à connaître, leur composition, leur lecture.</p>
                </li>
                <li>
                    <img src={Identification} alt="Identification"/>
                    <p><strong>Test d'identification : </strong> Les tests d'identification à connaître, leur principe, les résultats.</p>
                </li>
                <li>
                    <img src={Arbre} alt="Arbre"/>
                    <p><strong>Arbre d'identification : </strong> Les arbres d'identification classiques.</p>
                </li>
                <li>
                    <img src={Techniques} alt="Techniques"/>
                    <p><strong>Techniques : </strong> Les techniques à connaître.</p>
                </li>
            </ul>
        </StyledSummary>
    );
};

const StyledSummary = styled.div`
    margin: 1rem;
    background: #FAE7E6;
    border: solid 2px #56423E;
    border-radius: 30px;
    width: 60%;
    padding: 1rem;
    h1 {
        font-size: 1.3rem;
        padding-bottom: 1rem;
    }
    ul {
        li {
            padding-bottom: 1rem;
            display: flex;
            align-items: center;
            img {
                width: 65px;
                height: 65px;
            }
            p {
                padding-left: 1rem;
                font-size: 1rem;
                text-align: justify;    
            }
        }
    }
`;

export default Summary;