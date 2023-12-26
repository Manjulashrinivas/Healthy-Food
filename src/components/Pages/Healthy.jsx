import React from 'react';
import "./Healthy.css";

function Healthy() {
  return (
    <div>
      <h1>
        Healthy Foods
      </h1>
      <div className="row">
        <div className="col"><img src="appl.jpg" width="400px" height="300px" ></img></div>
        <div className="col"> <img src="dry.jpg" width="400px" height="300px"></img></div>
        <div className="col"> <img src="grp.jpg" width="400px" height="300px"></img></div>
     
      </div>
      <div className="row">
      <div className="col">  <img src="m1.jpg" width="400px" height="300px"></img></div>
      <div className="col"> <img src="palak.jpg" width="400px" height="300px"></img></div>
      <div className="col">  <img src="p3.png" width="400px" height="300px"></img></div>
      </div>
      <div className="row">
      <div className="col">  <img src="m2.webp" width="400px" height="300px"></img></div>
      <div className="col"> <img src="pomo.jpg" width="400px" height="300px"></img></div>
      <div className="col">  <img src="nu.jpg" width="400px" height="300px"></img></div>
      </div>
      <div className="row">
      <div className="col">  <img src="p2.jpg" width="400px" height="300px"></img></div>
      <div className="col"> <img src="pei.jpg" width="400px" height="300px"></img></div>
      <div className="col">  <img src="banana.jpg" width="400px" height="300px"></img></div>
      </div>
      
    </div>
  )
}

export default Healthy;