
import Button from './Button';

function Front(){

    return <div className="front-container">

    <div className="inner-bag">

    {/* top1 section ////////////////////////////// */}

    <div className="top1">
        <h1 className="slogan">Scooter sharing made simple</h1>
        <div className="top1Div left">
            <img src="../starter-code/assets/patterns/line.svg"className="line" alt="line"/>
        </div>
        <div className="top1Div middle">
            <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
  locations in each of our cities. Use our app to locate the nearest bike, unlock 
  it with a tap, and you’re away!</p>

     <div className="top1-button">

        <Button  innerText="Get Scootin"/>
     </div>

        </div>
        <div className="top1Div right">
            <img src="../starter-code/assets/patterns/right-arrow.svg"  className="line2" alt="line"/>
        </div>
        <div className="circle">
       
        <img  className="iconCircle" src="../starter-code/assets/patterns/white-circles.svg" alt="circle"/>

        </div>
    </div>

{/* top2 section///////////////////////////////////////// */}
<div className="top2">
    <div className="chain-container">
        <div className="chain"></div>
        <div className="locket">
            <img src="../starter-code/assets/icons/locate.svg" className="icon icon1" alt="icon"/>
        </div>
        <div className="chain">

        </div>
        <div className="locket">

        <img src="../starter-code/assets/icons/scooter.svg" className="icon icon2" alt="icon"/>

        </div>
        <div className="chain"></div>
        <div className="locket">

        <img src="../starter-code/assets/icons/ride.svg" className="icon icon3" alt="icon"/> 
        </div>

    </div>

        <div className="text-container">
        <div className="top2Text">
        <h4> Locate with app</h4>
        <p>Use the app to find the nearest scooter to you. We are continuously placing scooters 
  in the areas with most demand, so one should never be too far away.</p>
        </div>

        
        <div className="top2Text">
        <h4>Pick your scooter</h4>
        <p>We show the most important info for the scooters closest to you. So you know how much 
  charge they have left and can see roughly how much it will cost.</p>
        </div>
        <div className="top2Text">
        <h4>Enjoy the ride</h4>
        <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
  and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
        </div>
            
       

        
    </div>

{/* middle1 section ////////////////////////////////////// */}

<div className="middle1">
    <div className="left-window">
    <h1> Easy to use riding telemetry</h1>
    <p>The Scoot app is available with riding telemetry. This means it can show you your 
  average speed, how long you've been using the scooter, your traveling distance, 
  and many more things all in an easy to use app.</p>
   <div className="middle1-button">
   <Button 
    innerText="learn more"
   />
   </div>
    </div>
    <div className="right-window">
   <img  src="../starter-code/assets/images/telemetry.jpg" className="front-pic" alt="telemetry"/>
   <img  src="../starter-code/assets/patterns/left-downward-arrow.svg" className="arrow"alt="arrow"/>
   <img src="../starter-code/assets/patterns/circle.svg" className="semi-circle" alt="semi-circle"/>
    </div>

</div>

{/* middle2 section ///////////////////////////////////// */}

<div className="middle2">
  <div className="left-window">
  <img src="../starter-code/assets/patterns/circle.svg" className="semi-circle" alt="semi-circle"/>
  <img src="../starter-code/assets/patterns/right-arrow.svg" className="arrow" alt="arrow"/>
  <img  src="../starter-code/assets/images/near-you.jpg" className="front-pic" alt="near-you"/>

  </div>
  <div className="right-window">

  <div className="text-wrapper">

  <h1> Coming to a city near you</h1>
  <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure 
  to let us know if you want to see us in your hometown. We’re aiming to let our 
  scooters loose on 23 cities over the coming year.</p>
 
  <div className="middle2-button">

  <Button innerText="learn more"/>
  
  </div>

  </div>
  

  </div>

</div>

</div>


<div className="middle3">

    <div className="left-window">
        
        <div className="text-msg">
            <h1>  Zero hassle payments</h1>
            <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. 
               You can also link your PayPal account inside the app. Need to pay later? No worries! 
               You can defer payment for up to a month.</p>
            
            <div className="middle3-button">
            <Button innerText = "learn more"/>
            </div>
        </div>



    </div>

     <div className="right-window">
           
           <img src="../starter-code/assets/images/payments.jpg" className="front-pic" alt="front-pic"/>
           <img  src="../starter-code/assets/patterns/left-downward-arrow.svg" className="arrow"alt="arrow"/>
           <img src="../starter-code/assets/patterns/circle.svg" className="semi-circle" alt="semi-circle"/>
    </div>

</div>

  
   
</div>
</div>
}


export default Front;