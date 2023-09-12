import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import './User.scss';


function User() {
    return (
        <div class="User">
            <div class="User-text d-flex flex-column h-100 justify-content-center text-center">
                <img class="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src="bruno-scorzafave.jpeg" alt="" />
                <h1 class="font-weight-bold">Bruno Scorzafave</h1>
                <p class="mb-4">
                Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo
                </p>
                <div class="d-flex justify-content-center mb-5">
                    <a class="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} /></a>
                    <a class="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></a>
                    <a class="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={icon({name: 'facebook', style: 'brands'})} /></a>
                    <a class="btn btn-outline-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bruno-scorzafave/"><FontAwesomeIcon icon={icon({name: 'instagram', style: 'brands'})} /></a>
                </div>
                <a href="https://www.linkedin.com/in/bruno-scorzafave/" target="_blank" rel="noreferrer" class="btn btn-lg btn-block btn-primary mt-auto">Hire Me</a>
            </div>
            <div class="User-icon d-flex flex-column h-100 justify-content-center text-right">
                <i class="fas fa-2x fa-angle-double-right text-primary"></i>
            </div>
        </div>
    )
}

export default User;
