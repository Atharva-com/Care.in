import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "rgb(54, 134, 134)"}}>
                <a className="navbar-brand mx-4" target={"_blank"} href="/" style={{cursor: 'pointer', fontWeight: '600', letterSpacing: '.1rem', color: 'white', fontSize: '1.3rem'}}>{props.title}</a>
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse nav navbar-collapse justify-content-end mx-3" id="navbarSupportedContent">
                    <ul className="nav navbar-nav justify-content-end align-items-center" style={{fontSize: '1.1rem'}}>
                        <li className="nav-item">
                            <Link onClick={props.setProgress(100)} className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={props.setProgress(100)} className="nav-link" to="/About">{props.about}</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Faq" onClick={props.setProgress(100)} className="nav-link">FAQ's</Link>
                        </li>
                        <li className="mx-3 nav-item">
                            <Link to="/Login" onClick={props.setProgress(100)} className="btn login-btn my-2" tabIndex="0" role="button" aria-disabled="true">Register/Login</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set Title',
    about: 'Set About'
};