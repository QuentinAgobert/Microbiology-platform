import React from "react";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// MicroState
import { MicroState } from "../microState";

const MicroNav = () => {
    return (
        <StyledMicroNav>
            <ul>
                <li><Link to="/microorganismes/Emilio">Emilio</Link></li>
                <li><Link to="/microorganismes/Toto">Toto</Link></li>
            </ul>
        </StyledMicroNav>
    );
};

const StyledMicroNav = styled.nav`
    background: lightcoral;
    padding: 2rem;
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        li {
            font-size: 1.5rem;
            padding: 0.5rem 0rem;
        }
        a {
            color: black;
            text-decoration: none;
        }
    }
`;

export default MicroNav;