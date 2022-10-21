import React from 'react';
import { renderMatches } from 'react-router-dom';

function Kontakt(){

    return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            Street<br />
                            Street<br />
                            City<br />
                            <i className="fa fa-phone"></i>: +852 1234 55675756678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4327657561<br />
                            <i className="fa fa-envelope"></i>: <a href="mail@mailmail"></a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href=""><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                </div>
    );
}

export default Kontakt;