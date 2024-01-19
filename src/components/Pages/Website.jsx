import React from 'react';
import "./Website.css";
import SocialMediaButtons from './social.jsx';
import "./Healthy.css";


function Website() {
  return (
    <>
    <div className='example'>
    <img  className="HM" src="f3.jpg"/>
    <div className="container">
        <h1>
            About Heathly Food
        </h1>
        <div className="row">
            <div className="col">
<img className='FR' src="f1.jpg"/>

            </div>
            <div className="col">
                <h3>Healthy food does not have merely one but numerous benefits. It helps us in various spheres of life. Healthy food does not only impact our physical health but mental health too.

When we intake healthy fruits and vegetables that are full of nutrients, we reduce the chances of diseases. For instance, green vegetables help us to maintain strength and vigor. In addition, certain healthy food items keep away long-term illnesses like diabetes and blood pressure.

Similarly, obesity is the biggest problems our country is facing now. People are falling prey to obesity faster than expected. However, this can still be controlled. Obese people usually indulge in a lot of junk food. The junk food contains sugar, salt fats and more which contribute to obesity. Healthy food can help you get rid of all this as it does not contain harmful things.

In addition, healthy food also helps you save money. It is much cheaper in comparison to junk food. Plus all that goes into the preparation of healthy food is also of low cost. Thus, you will be saving a great amount when you only consume healthy food.
Healthy Benefit has a lot of benefits. It keeps us healthy and fit. Moreover, it keeps away diseases like diabetes, blood pressure, cholesterol and many more. Healthy food also helps in fighting obesity and heart diseases.</h3>

            </div>
        </div>
    </div>
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
      <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "164277320113490");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
<div className='fot'>
  <div>
<h2>About Website</h2>
<h4 className='ht'>This page will explain how to protect our bodies against heart attacks,<br></br> diabetes, and other conditions.</h4>
<h3 className='smb'><SocialMediaButtons/></h3>
<h3 className='cdb'>@Copyright . All Rights Reserved </h3>
<h3 className='cmb'>Code by MKMS</h3>
</div>
<div >

  <ul>
    <li> <a className='Li' href='/home'>Home</a></li>
    <li><a className='Li' href='/about'>About</a></li>
    <li><a className='Li' href='/contact'>Conatct</a></li>
    <li> <a className='Li' href='/help'>Help</a></li>
 </ul>
 <div className='ck'>
 <h4 className='nm'>Email:manasamanasa08502@gmail.com</h4>
 <h4 className='nm'>PhoneNo:96118616141/6360517751</h4>
 </div>
</div>

   </div>
   </div>
 
 
    </>
   
  )
}

export default Website;
