import React, { Fragment, useState, useEffect } from "react";

const Accordion = ({ nom, id }) => {

    const [subMenu, setSubMenu] = useState([]);

    const getSubCategories = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/mo_categories/liste/${id}`);
            const jsonData = await response.json();
            setSubMenu(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getSubCategories(id);
    }, []);

    return (
        <div class="accordion" id={`${id}`}>
            <div class="accordion-group">
                <div class="accordion-heading">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent={`#${id}`} href={`#collapse${id}`}>
                        {nom}
                    </a>
                </div>
                <div id={`collapse${id}`} class="accordion-body collapse">
                    <div class="accordion-inner">
                        {subMenu.map(item => (
                            <Accordion nom={item.nom} id={item.id} key={item.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MicroDetail = ({ moCategorie }) => {

    return (
        <Fragment>
            <Accordion nom={moCategorie.nom} id={moCategorie.id} />
        </Fragment>
    );
};

export default MicroDetail;