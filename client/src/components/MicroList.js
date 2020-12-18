import React, { Fragment, useState, useEffect } from "react";
// Components
import EditMicroOrganism from "./EditMicroOrganism";

const MicroList = () => {

    const [moCategories, setMoCategories] = useState([]);
    const [microOrganisms, setMicroOrganisms] = useState([]);

    const deleteMicroOrganism = async(nom) => {
        try {
            const deleteMicroOrganism = await fetch(`http://localhost:5000/microorganismes/${nom}`, {
                method: "DELETE",
            });
            setMicroOrganisms(microOrganisms.filter(microOrganism => microOrganism.mo_nom !== nom));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getMicroOrganisms = async() => {
        try {
            const response = await fetch("http://localhost:5000/microorganismes");
            const jsonData = await response.json();
            setMicroOrganisms(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getRootCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/mo_categories/root");
            const jsonData = await response.json();
            setMoCategories(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/mo_categories/liste/0");
            const jsonData = await response.json();
            setMoCategories(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCategories();
        getMicroOrganisms();
    }, []);

    return (
        <Fragment>
            <div class="accordion" id="accordion2">
                <div class="accordion-group">
                    <div class="accordion-heading">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                            Collapsible Group 2
                        </a>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                        <div class="accordion-inner">
                            <div class="accordion" id="accordion1">
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseOneA">
                                            Collapsible Group 1
                                        </a>
                                    </div>
                                    <div id="collapseOneA" class="accordion-body collapse">
                                        <div class="accordion-inner">
                                            Toto
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link drop-down-toggle" data-toggle="dropdown" href="#" id="navbardrop" >Link 3 <span class="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#" className="dropdown-item">Link 4</a></li>
                            <li><a href="#" className="dropdown-item">Link 5</a></li>
                            <li><a href="#" className="dropdown-item">Link 6</a></li>
                        </ul>
                    </li>
                </ul>
            </nav> */}

            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {microOrganisms.map(microOrganism => (
                        <tr key={microOrganism.mo_id}>
                            <td>{microOrganism.mo_nom}</td>
                            <td>
                                <EditMicroOrganism microOrganism={microOrganism} />
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteMicroOrganism(microOrganism.mo_nom)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default MicroList;