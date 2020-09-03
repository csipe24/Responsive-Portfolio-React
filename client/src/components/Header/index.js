import React from "react";
import Project from "../Project";
// import {useIsAuthenticated, useLogout} from "../../utils/auth";

function Header(){

        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
            <a class="navbar-brand">Christopher Sipe</a>
            <Project/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
    
            <li class="nav-item">
            <a class="nav-link" href="/portfolio">Portfolio</a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="/">Profile</a>
            </li>

            </ul>
             </div>
            </nav>
             </div> 
        );
}

export default Header;