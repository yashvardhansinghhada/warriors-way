import React from "react";

export default function Footer() {

const year=new Date();
const currentYear=year.getFullYear();

  return (
    <div className=" d-flex flex-column min-vh-100 justify-content-center">
        <footer className="mt-auto">
      <div className="card justify-content-center align-items-center">
        <div className=" card-body">
           
          <h5 className="card-title ">Copyright {currentYear}</h5>
        </div>
      </div>
      </footer>
    </div>
  );
}
