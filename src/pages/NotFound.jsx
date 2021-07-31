import React from 'react';
import NotFound404 from '../images/404.svg';

function NotFound () {
    return (
        <React.Fragment>
            <section className="container">
                <div className="row d-flex justify-content-center">
                    <img src={NotFound404} className="w-50" alt="Not Found Error 404" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default NotFound;