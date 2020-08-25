import React from 'react'

export const HistoryList = (props) => {
    const dataList = props.dataList;
    return (
        <div>
             {
                dataList.map((item,i)=>{
                     return(
                         <div className="list-group container" key={i}>
                            <li className="list-group-item flex-column m-3 border-dark">
                                <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1"><b>Title : </b>{item.title}</h5>
                                </div>
                                <p className="mb-1"><b>Details : </b>{item.details}</p>
                                <p className="mb-1"><b>Event Date : </b>{item.event_date_unix}</p>
                                <p className="mb-1"><b>EventDate: </b>{item.event_date_utc}</p>
                                <p className="mb-1"><b>Links : </b></p>
                                <small><b>Article : </b>{item.links.article}</small><br/>
                                <small><b>Wikipedia : </b>{item.links.wikipedia}</small>
                            </li>
                        </div>
                     )
                 })
             }
        </div>
    )
}
