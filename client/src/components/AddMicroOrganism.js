import React, { Fragment, useState } from "react";

const AddMicroOrganism = () => {

    const [nom, setNom] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            console.log("Toto");
            const body = { nom };
            const response = await fetch("http://localhost:5000/microorganismes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/microorganismes";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Liste des micro-organismes</h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Ajouter un micro-organisme</button>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Ajouter un micro-organisme</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            <form onSubmit={onSubmitForm}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Nom</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder=""
                                        onChange={e => setNom(e.target.value)}
                                        id="nom" />
                                </div>
                                {/* <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Classification</span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control" 
                                        placeholder="" 
                                        onChange={e => setClassification(e.target.value)}
                                        id="classification" />
                                </div> */}
                                <button className="btn btn-success">Créer</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AddMicroOrganism;