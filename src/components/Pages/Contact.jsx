import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div>
      <marquee><h2> ANY QUERY ABOUT DIET CONTACT US</h2>   </marquee> 
 <div className="con">
 <form  className='fm'>
   
    <label>Enter Your Name</label>
    <input type="text" /><br></br><br></br><br></br>
    <label>Enter Your Age</label>
    <input type="text" /><br></br><br></br><br></br>
    <label>Enter Your Gender</label>
    <input type="radio"  name="Gender"/>Male
    <input type="radio"  name="Gender"/>Female
    <input type="radio"  name="Gender"/>Other<br></br><br></br><br></br>
    <label>Enter Your Phonenumber</label>
    <input type="text" /><br></br><br></br><br></br>
    <label>Enter Your Query</label><br></br>
    <textarea col="5px"  row="20px"/><br></br><br></br><br></br>
    <button>Send Querey</button>
  
 </form>
    <img className='f2' src="f2.jpg"></img>
</div>
    </div>
  )
}

export default Contact;