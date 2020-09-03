import React from "react";
import Project from "../Project";

import BudgetTracker from "../../images/BudgetTracker.jpg";
import CodeQuiz from "../../images/CodeQuiz.jpg";
import FitnessTracker from "../../images/FitnessTracker.jpg";
import InMyCity from "../../images/InMyCity.jpg";
import InventoryKeeper from "../../images/InventoryKeeper.jpg";
import PasswordGen from "../../images/PassGen.jpg";
import { Carousel } from 'react-bootstrap';
 

function CarouselComp(){
    // const isAuth = useIsAuthenticated();
    // const logout = useLogout();

    return(
        <div>
        <Project/>
        <br></br>
        <Carousel>
            

               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={BudgetTracker}
                   />
                   <Carousel.Caption>
                   <div class="carousel-caption d-none d-md-block bg-dark text-white">
                   <h5>Budget Tracker</h5>
                   </div>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={FitnessTracker}
                   />
                   <Carousel.Caption>
                   <div class="carousel-caption d-none d-md-block bg-dark text-white">
                   <h5>Fitness Tracker</h5>
                   </div>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={CodeQuiz}
                   />
                   <Carousel.Caption>
                   <div class="carousel-caption d-none d-md-block bg-dark text-white">
                   <h5>Code Quiz</h5>
                   </div>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={InMyCity}
                   />
                   <Carousel.Caption>
                   <div class="carousel-caption d-none d-md-block bg-dark text-white">
                   <h5>InMyCity API App</h5>
                   </div>
                   </Carousel.Caption>
               </Carousel.Item>

               
               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={InventoryKeeper}
                   />
                   <Carousel.Caption>
                   <div class="carousel-caption d-none d-md-block bg-dark text-white">
                   <h5>Inventory Keeper</h5>
                   </div>
                   </Carousel.Caption>
               </Carousel.Item>

               
               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={PasswordGen}
                   />
                   <Carousel.Caption>
                   <div class="carousel-caption d-none d-md-block bg-dark text-white">
                   <h5>Password Generator</h5>
                   </div>
                   </Carousel.Caption>
               </Carousel.Item>


           

       </Carousel>
       </div>
      
    )

 }

export default CarouselComp;
