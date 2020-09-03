import React from "react";
import Carousel from "../components/Carousel";


function Portfolio(){
    // const isAuth = useIsAuthenticated();
    // const logout = useLogout();

    return(
        <div> 

             <div className="jumbotron">
            <div className="container" align="center">
            <h1 className="display-4">Portfolio</h1>
            <hr class="my-3"></hr>
            <p className="lead"></p>
            <h2>Check Out My Coding Projects!</h2>
       
            <br></br>
    
        <div class="container">
        <div class="row">
            <div class="col">
      
            </div>

            <div class="col-6">
            <Carousel/>
            </div>

            <div class="col">

            </div>

            </div>
        </div>
        </div>
        </div>
            </div>
          
    )

 }

export default Portfolio;