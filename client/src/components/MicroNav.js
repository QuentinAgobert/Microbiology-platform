import React, { Fragment, useState, useEffect } from "react";
// Styles
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Components
import MicroDetail from "./MicroDetail";

const MicroNav = () => {

    const [moCategories, setMoCategories] = useState([]);
    const getRootCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/mo_categories/root");
            const jsonData = await response.json();
            setMoCategories(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getRootCategories();
    }, []);

    return (
        <Fragment>
            <nav className="navbar">
                <ul className="navbar-nav">
                    {moCategories.map((moRootCat) => (
                        <li className="nav-item" key={moRootCat.id}>
                            <MicroDetail moCategorie={moRootCat} />
                        </li>
                    ))}
                </ul>
            </nav>
        </Fragment>
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