import React from "react";
import Project from "../Project";


function Footer(){


        return (
            <div>
            <nav class="navbar fixed-bottom bg-dark text-white justify-content-end">
            <a class="navbar-brand" href="https://github.com/csipe24">Coder In Training</a>
            <Project/>
            </nav>
            </div>
        );
}

export default Footer;