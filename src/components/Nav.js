import React from "react";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Image
import Logo from "../img/Microbiomicon.png";

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/" className="logo-title">
                <img src={Logo} alt="logo"/>
                <h1>MICROBIOMICON</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/microorganismes">Micro-organismes</Link>
                </li>
                <li>
                    <Link to="/milieux-de-culture">Milieux de culture</Link>
                </li>
                <li>
                    <Link to="/test-identification">Test d'identification</Link>
                </li>
                <li>
                    <Link to="/arbre-identification">Arbre d'identification</Link>
                </li>
                <li>
                    <Link to="/techniques">Techniques</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    background: #5f0301;
    padding: 0rem 6rem;
    display: flex;
    justify-content: center;
    .logo-title {
        padding: 1rem 0rem;
        display: flex;
        align-items: center;
        width: 25%;
        img{
            padding-left: 2rem;
            width: 25%;
        }
        h1 {
            padding-left: 1rem;
            font-size: 2rem;
            text-decoration: none;
            color: white;
            font-family: 'Condiment', cursive;
        }
    }
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0rem 2rem;
        li {
            padding: 0rem 2rem;
            font-size: 1.3rem;
        }
        a {
            color: white;
        }
    }
`;

export default Nav;