import React from "react";

export default function Mentor(props){
   return (<div>
        <div className="card mb-3" style={{ maxWidth:"800px"}}>
  <div className="row g-0">
    <div className="col-md-4 p-4">
      <img style={{height:"200px",width:"200px"}} src={props.src} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{props.mentorName}</h3>
        <h5 className="card-text">{props.description1}</h5>
        <p className="card-text">{props.description2}</p>
        <a href="/" className="btn btn-primary">KNOW MORE</a>
      </div>
    </div>
  </div>
</div>

   </div>)
}