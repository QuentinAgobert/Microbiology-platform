import React from "react";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Image
import Logo from "../img/Microbiomicon_petit.png";
import Mask from "../img/Mask.svg";
import Bacteria from "../img/Bacteria.svg";
import Culture from "../img/Culture.svg";
import Arbre from "../img/Arbre.svg";
import Identification from "../img/Identification.svg";
import Techniques from "../img/Techs.svg";

const Nav = () => {
    return (
        <>
        <StyledNav>
            <div className="nav-title">
                <img className="mask" src={Mask} alt="mask"/>
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo"/>
                </Link>
                <Link to="/">
                    <h1>MICROBIOMICON</h1>
                </Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li className="toto1">
                        <Link to="/microorganismes">
                            <img src={Bacteria} alt="Section microorganismes"/>
                        </Link>
                        <Link to="/microorganismes">
                            <h2>Micro-organismes</h2>
                        </Link>
                    </li>
                    <li className="toto2">
                        <Link to="/milieux-de-culture">
                            <img src={Culture} alt="Section milieux de culture"/>
                        </Link>
                        <Link to="/milieux-de-culture">
                            <h2>Milieux de culture</h2>
                        </Link>
                    </li>
                    <li className="toto3">
                        <Link to="/test-identification">
                            <img src={Identification} alt="Section test d'identification"/>
                        </Link>
                        <Link to="/test-identification">
                            <h2>Tests d'identification</h2>
                        </Link>
                    </li>
                    <li className="toto4">
                        <Link to="/arbre-identification">
                            <img src={Arbre} alt="Section arbre d'identification"/>
                        </Link>
                        <Link to="/arbre-identification">
                            <h2>Arbres d'identification</h2>
                        </Link>
                    </li>
                    <li className="toto5">
                        <Link to="/techniques">
                            <img src={Techniques} alt="Section techniques"/>
                        </Link>
                        <Link to="/techniques">
                            <h2>Techniques</h2>
                        </Link>
                    </li>
                </ul>
            </div>
        </StyledNav>
        </>
    );
};

const StyledNav = styled.nav`
    width: 70%;
    margin: auto;
    margin-top: 1rem;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: white;

    .nav-title {
        position: relative;
        padding: 0rem 1rem;
        margin-right: 8rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .mask {
            height: 100px;
            position: absolute;
            left: 0%;
        }
        .logo {
            margin-top: 0.5rem;
            position: relative;
            width: 70px;
            height: 70px;
        }
        h1 {
            position: relative;
            padding: 0.75rem 1rem 0rem 1rem;
            font-size: 2rem;
            text-decoration: none;
            color: white;
            font-family: 'Condiment', cursive;
        }
    }

    .nav-links {
        ul {
            padding: 0rem 1rem;
            display: flex;
            align-items: center;
            list-style: none;
            li {
                padding: 0rem 2rem;
                position: relative;
                border-radius: 30px;
                display: flex;
                text-align: center;
                h2 {
                    margin-top: auto;
                    position: absolute;
                    opacity: 0;
                    top: 15px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    color: white;
                    font-size: 1rem;
                    font-weight: bolder;
                }
                img {
                    margin-top: 0.5rem;
                    width: 65px;
                    height: 65px;
                }
                &:hover {
                    background: #9D1212;
                    img {
                        opacity: 0;
                    }
                    h2 {
                        opacity: 1;
                    }
                }
            }
            .toto5 h2 {
                top: 27px;
            }
        }
    }
`;

export default Nav;