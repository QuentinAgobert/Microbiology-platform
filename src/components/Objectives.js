import React from "react";
// Styles
import styled from "styled-components";

const Objectives = () => {
    return (
        <StyledObjectives>
            <h1 className="bases">Maîtriser les <strong>bases</strong></h1>
            <h1 className="methodo">Comprendre la <strong>méthodologie</strong></h1>
            <h1 className="reussir">S'entraîner et <strong>réussir</strong></h1>
        </StyledObjectives>
    );
};

const StyledObjectives = styled.div`
    background: #BEA6A1;
    width: 60%;
    text-align: right;
    margin-top: 5rem;
    padding-right: 1rem;
    h1 {
        font-size: 2.5rem;
        strong {
            color: #9D1212;

        }
    }
    .bases {
        padding-right: 9.7rem;
    }
    .reussir {
        padding-right: 8.4rem;
    }
`;

export default Objectives;