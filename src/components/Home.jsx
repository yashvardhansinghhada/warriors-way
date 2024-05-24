import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import { dataCard } from "../dataCard";
import Mentor from "./Mentor";


export default function Home(){

    return(<div>
        <hr/>
        <Carousel />
        <hr />
        <div  className="container d-flex justify-content-center align-items-center">
         <a class="btn btn-primary" href="/login" role="button">TAP HERE FOR REGISTRATION</a> 
        </div>
        <hr />
        <div className="container d-flex justify-content-center align-items-center" style={{padding:"20px"}}>
    
          <div style={{padding:"10px"}}>
        <Card  src={dataCard[0].src} mentorName={dataCard[0].courseName} description={dataCard[0].description}/>
        </div>

        <div style={{padding:"10px"}}>
        <Card  src={dataCard[1].src} mentorName={dataCard[1].courseName} description={dataCard[1].description}/>
        </div>
        <div style={{padding:"10px"}}>
        <Card  src={dataCard[2].src} mentorName={dataCard[2].courseName} description={dataCard[2].description}/>
        </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-center align-items-center">
        <Mentor src={dataCard[3].src} mentorName={dataCard[3].courseName} description1={dataCard[3].description1} description2={dataCard[3].description2} />
        </div>

        </div>
  
    );
    
    }