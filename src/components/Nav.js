import React from "react";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Image
import Logo from "../img/Microbiomicon_petit.png";
import Test from "../img/Test.svg";
import Bacteria from "../img/Bacteria.svg";
import Culture from "../img/Culture.svg";
import Arbre from "../img/Arbre.svg";
import Identification from "../img/Identification.svg";
import Techniques from "../img/Techniques.svg";

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/" className="logo-title">
                <img src={Logo} alt="logo"/>
                <img className="test" src={Test} alt="test"/>
                <h1>MICROBIOMICON</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/microorganismes">
                        <img src={Bacteria} alt="Image section microorganismes"/>
                    </Link>
                </li>
                <li>
                    <Link to="/milieux-de-culture">
                        <img src={Culture} alt="Image section milieux de culture"/>
                    </Link>
                </li>
                <li>
                    <Link to="/test-identification">
                        <img src={Identification} alt="Image section test d'identification"/>
                    </Link>
                </li>
                <li>
                    <Link to="/arbre-identification">
                        <img src={Arbre} alt="Image section arbre d'identification"/>
                    </Link>
                </li>
                <li>
                    <Link to="/techniques">
                        <img src={Techniques} alt="Image section techniques"/>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    padding: 1rem 6rem;
    display: flex;
    justify-content: center;
    .logo-title {
        padding: 1rem 0rem;
        display: flex;
        align-items: center;
        width: 25%;
        .test {
            position: absolute;
            top: 1rem;
            left: 19.5%;  
            width: 19.5%;
            z-index: 1;
        }
        img{
            padding-left: 2rem;
            width: 25%;
            z-index: 2;
        }
        h1 {
            padding-left: 1rem;
            padding-top: 0.7rem;
            font-size: 2rem;
            text-decoration: none;
            color: white;
            font-family: 'Condiment', cursive;
            z-index: 2;
        }
    }
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        li {
            img {
                width: 40%;
            }
        }
        a {
            color: black;
        }
    }
`;

export default Nav;