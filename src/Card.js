
import React,{} from "react"
import robot from "./robot.jpg"
import computer from "./computer.jpg"
import fullstack from "./fullstack.png"


function Card(){
  return(

   <>
      <h2>A comprehensive learning ecosystem tailored for developers, machine learning enthusiasts, and data engineers.</h2>

   <div>
  <div className="car">

    <img className="img1" src={robot} width="250px" alt="robot"></img>
    <h1>Machine Learning</h1>
    <p>Enroll Now</p>
    </div>
    <div className="card-1">
   <img className="img2"       src={computer}width="250px" alt="computer" ></img>
    <h1>Data Engineering</h1>
    <p>Enroll Now</p>

    
    </div>
    
    <div className="card-2">
    <img className="img3" src={fullstack} width="250" alt="fullstack"></img>
    <h1>Fullstack Development</h1>
    <p>Enroll Now</p>
  </div>
  </div>
  </>
  )  
  
  

}

export default Card