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
            <StyledCircleTop />
            <StyledCircleBottom />
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

const StyledCircleTop = styled.div`
    background: #0054CB;
    color: #0054CB;
    opacity: 0.6;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: -600px;
    left: -500px;
    border-radius: 50%;
`;

const StyledCircleBottom = styled.div`
    background: #429038;
    color: #429038;
    opacity: 0.7;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    right: -500px;
    bottom: 0;
    border-radius: 50%;
`;

const StyledHome = styled.div`
    position: relative;
    overflow: hidden;
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