import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import './User.scss';


function User() {
    return (
        <div class="sidebar">
        <div class="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
            <img class="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src="bruno-scorzafave.jpeg" alt="Image" />
            <h1 class="font-weight-bold">Bruno Scorzafave</h1>
            <p class="mb-4">
                I'm a developer and this is being developed
            </p>
            <div class="d-flex justify-content-center mb-5">
                <a class="btn btn-outline-primary me-2" href="#"><FontAwesomeIcon icon="fa-twitter" /></a>
                <a class="btn btn-outline-primary me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-outline-primary me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-outline-primary me-2" href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <a href="" class="btn btn-lg btn-block btn-primary mt-auto">Hire Me</a>
        </div>
        <div class="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
            <i class="fas fa-2x fa-angle-double-right text-primary"></i>
        </div>
        </div>
    )
}

export default User;
