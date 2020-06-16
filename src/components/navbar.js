import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
    return (
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item ">
                <Link className={"nav-link" + (props.location.pathname === "/" ? " active" : "") } to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link" + (props.location.pathname === "/about" ? " active" : "") } to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link" + (props.location.pathname === "/contact" ? " active" : "") } to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default withRouter(Navbar);