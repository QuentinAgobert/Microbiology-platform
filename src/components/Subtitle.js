import React from "react";
// Styles
import styled from "styled-components";

const Subtitle = () => {
    return (
        <StyledSubtitle>
            <h1>Subtitle</h1>
        </StyledSubtitle>
    );
};

const StyledSubtitle = styled.div`
    background: lightpink;
    width: 40%;
    padding: 2rem;
`;

export default Subtitle;