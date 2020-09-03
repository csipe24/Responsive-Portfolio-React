import React from "react";
import profilepic from "../images/profilepic.jpg";

// import {useIsAuthenticated, useLogout} from "../utils/auth";

function Profile(){
    // const isAuth = useIsAuthenticated();
    // const logout = useLogout();

    return(
        <div>
            <div className="jumbotron">
            <div className="container" align="center">
            <h1 className="display-4">Christopher Sipe</h1>
            <hr class="my-3"></hr>
            <p className="lead"></p>
            <h2>React Resume</h2>
            </div>
            </div>

            <div className="jumbotron">
            <div className="container" align="center">
            <img className="img-thumbnail" src={profilepic}></img>
            </div>
            </div>

            <div className="jumbotron">
            <div className="container" align="center">
            <div class="row" >
            <div class="col-md-6">
            <h4 align="center">Details</h4>
            <hr class="my-3"></hr>
            <h5>Age: 25</h5>
            <h5>Location: Renton, Washington</h5>
            <h5>Github: <a href="https://github.com/csipe24">Here</a></h5>
            <h5>LinkedIn: <a href="https://www.linkedin.com/in/christopher-sipe-4243468b/">Here</a></h5>
            </div>
         

            <div class="col-md-6">
            <h4>About Me</h4>
            <hr class="my-3"></hr>
            <p>
            I am a full stack developer who recently graduated from the University of Washington Coding Bootcamp.
            I am currently on the search for my first job as a web dev!
            My interest in coding was sparked by my friends who all thought i would become a great software engineer or software developer!
            My background before learning to code was centered around business management.
            I love finding ways to improve code and i love learning about new coding packages.
            Please review my portfolio to see my code projects <a href="https://github.com/csipe24">here</a>!
            </p>
            </div>
            </div>
            </div>

            <div class="jumbotron">
            <div class="container" align="center">
            <h1 class="display-4">Experience</h1>
            <br></br>
            <div class="row" >
            <div class="col-md-6">
            <h4>Education/Coursework</h4>
            <hr class="my-3"></hr>
            <h4>2020</h4>
            <b>University of Washington</b>
            <p>Coding Bootcamp Certificate – Web Development</p>
            <br></br>
            <h4>2013 - 2015</h4>
            <b>University of Washington Tacoma</b>
            <p>Bachelor of Arts in Business Administration - Major: Business Management</p>
            </div>
            <div class="col-md-6">
            <h4>Employment</h4>
            <hr class="my-3"></hr>
            <h4>2016 - Current</h4>
            <b>Legacy Partners</b>
            <p>Assistant Business Manager</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
                
    )
    };
export default Profile;