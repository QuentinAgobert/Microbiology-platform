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
    margin-right: 2rem;
    background: #FAE7E6;
    border: solid 2px #56423E;
    height: 100%;
    border-radius: 40px;
    padding: 2rem;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        li {
            font-size: 1.4rem;
            font-weight: bold;
            padding: 1rem 0rem;
        }
        a {
            color: #9D1212;
            text-decoration: none;
            &:hover {
                border-bottom: solid 2px #9D1212;
            }
        }
    }
`;

export default MicroNav;