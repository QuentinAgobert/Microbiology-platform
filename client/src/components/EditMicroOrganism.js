import React, { Fragment, useState } from "react";

const EditMicroOrganism = ({ microOrganism }) => {

    const [caracteristics, setCaracteristics] = useState(microOrganism.mo_carac);

    const updateCaracteristics = async (e) => {
        e.preventDefault();
        try {
            const body = { caracteristics };
            const response = await fetch(`http://localhost:5000/microorganisms/${microOrganism.mo_nom}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
            window.location = '/microorganismes';
        } catch (err) {
           console.error(err.message); 
        }
    };

    return (
        <Fragment>
            <button 
                type="button" 
                class="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${microOrganism.mo_id}`}
            >
                Modifier
            </button>

            <div 
                class="modal" 
                id={`id${microOrganism.mo_id}`} 
                onClick={() => setCaracteristics(microOrganism.mo_carac)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modifier {microOrganism.mo_nom}</h4>
                            <button 
                                type="button" 
                                class="close" 
                                data-dismiss="modal"
                                onClick={() => setCaracteristics(microOrganism.mo_carac)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={caracteristics} 
                                onChange={e => setCaracteristics(e.target.value)} 
                            />
                        </div>

                        <div class="modal-footer">
                            <button 
                                type="button" 
                                class="btn btn-warning" 
                                data-dismiss="modal"
                                onClick={e => updateCaracteristics(e)}
                            >
                                Edit
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button 
                                type="button" 
                                class="btn btn-danger" 
                                data-dismiss="modal"
                                onClick={() => setCaracteristics(microOrganism.mo_carac)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditMicroOrganism;