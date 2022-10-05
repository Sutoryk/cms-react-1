import React from 'react';
import {Link} from 'react-router-dom';
import "../shared/App.css";

function Footer(props){
    return(
        <div className='footer'>
            <div className='container'>
                <div className='row justify-content-center'>
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Aboutus</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;