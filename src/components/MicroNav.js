import React from "react";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const MicroNav = ({ microOrganisms }) => {
    return (
        <StyledMicroNav>
            <ul>
                { microOrganisms.map((microOrganism) => (
                    <li><Link to={`/microorganismes/${microOrganism.name}`}>{microOrganism.name}</Link></li>
                )) }
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