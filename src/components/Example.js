import React from "react";
// Styles
import styled from "styled-components";

const Example = () => {
    return (
        <StyledExample>
            <h1>Example</h1>
        </StyledExample>
    );
};

const StyledExample = styled.div`
    background: lightyellow;
    width: 40%;
`;

export default Example;