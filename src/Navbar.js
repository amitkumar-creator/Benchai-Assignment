import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{color:"white"}}>
                    <h4>Assignment</h4>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item active">
                            <Link to ="/" className="nav-link">History</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to ="/address" className="nav-link" >Address</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
