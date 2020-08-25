import React from 'react'

export const AddressList = (props) => {
    const payloadData = props.data;

    return (
        <div className="list_style">
           
             {
                payloadData.map((item,i)=>{
                     return(
                         <div className="list-group container" key={i}>
                            <li className="list-group-item flex-column m-3 border-dark">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1"><b>Customers : </b>{item.customers}</h5>
                                        </div>
                                            <p className="mb-1"><b>Manufacturer : </b>{item.manufacturer}</p>
                                            <p className="mb-1"><b>Nationality : </b>{item.nationality}</p>
                                            <p className="mb-1"><b>Orbit: </b>{item.orbit}</p>
                                            <p className="mb-1"><b>Reference :</b>{item.orbit_params.reference_system} </p>
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <small className="mb-1"><b>Regime : </b>{item.orbit_params.regime} </small><br/>
                                        <small className="mb-1"><b>Apoapsis_km : </b>{item.orbit_params.apoapsis_km} </small><br/>
                                        <small><b>Payload_mass_kg : </b>{item.payload_mass_kg}</small><br/>
                                        <small><b>Payload_mass_lbs : </b>{item.payload_mass_lbs}</small><br/>
                                        <small><b>Payload_type : </b>{item.payload_type}</small>
                                    </div>
                                </div>
                            </li>
                        </div>
                     )
                 })
             }
        </div>
    )
}
