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
            <div className="logo-title">
                <img src={Logo} alt="logo"/>
                <div className="title">
                    <h1><Link to="/">MICROBIOMICON</Link></h1>
                </div>
            </div>
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
    height: 7vw;
    padding: 0rem 6rem;
    display: flex;
    justify-content: center;
    .logo-title {
        display: flex;
        align-items: center;
        width: 25%;
        img{
            padding-left: 2rem;
            width: 30%;
        }
        .title {
            padding-left: 1rem;
            h1 {
                font-size: 2rem;
            }
            a {
                text-decoration: none;
                color: white;
                font-family: 'Condiment', cursive;
            }
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