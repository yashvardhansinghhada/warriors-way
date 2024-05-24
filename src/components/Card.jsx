import React from "react"

export default function Card(props){
    return( <div>
<div className="card" style={{width:"18rem",
 padding:"20px",
 height:"500px"}}>
  <img style={{height:"300px" , width:"250px"}} src={props.src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.mentorName}</h5>
    <p className="card-text">{props.description}</p>
    <a href="/" className="btn btn-primary">KNOW MORE</a>
  </div>
</div>
</div>);
}


