import React from "react";
// Styles
import styled from "styled-components";

const Summary = () => {
    return (
        <StyledSummary>
            <h1>Summary</h1>
        </StyledSummary>
    );
};

const StyledSummary = styled.div`
    background: lightblue;
    width: 60%;
`;

export default Summary;