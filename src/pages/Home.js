import React from "react";
// Styles
import styled from "styled-components";
// Components
import Subtitle from "../components/Subtitle";
import Objectives from "../components/Objectives" ;
import Summary from "../components/Summary";
import Example from "../components/Example";

const Home = () => {
    return (
        <StyledHome>
            <StyledUpPart>
                <Subtitle />
                <Objectives />
            </StyledUpPart>
            <StyledDownPart>
                <Summary />
                <Example />
            </StyledDownPart>
        </StyledHome>
    );
};

const StyledHome = styled.div`
    background: lightcoral;
    width: 70%;
    padding: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const StyledUpPart = styled.div`
    display: flex;
`;

const StyledDownPart = styled.div`
    display: flex;
`;

export default Home;