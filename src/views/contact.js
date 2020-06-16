import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = props => {

    useEffect(() => {
        //if (false === false) props.history.push("/login");

    }, [])

    return (
        <>
            <h1>Contact</h1>
            <Link className="btn btn-info" to="/">Home</Link>
            <button className="btn btn-primary" onClick={() => {
                props.history.goBack();
            }}>Back</button>

            <p>Category: {props.match.params.category}</p>
            <p>Group: {props.match.params.group}</p>

        </>
    )
}

export default Contact;