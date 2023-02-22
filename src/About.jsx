import React,{useState} from 'react';


function About(){

    let arrowStyle = {transform: "rotate(180deg)"}

  

    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three,setThree] =useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six,setSix] =useState(false);

    function oneFn(){
        setOne(prevValue =>{
            return !prevValue
        })
    }

    function twoFn(){
        setTwo(prevValue =>{
            return !prevValue
        })
    }

    function threeFn(){
        setThree(prevValue =>{
            return !prevValue
        })
    }

    function fourFn(){
        setFour(prevValue =>{
            return !prevValue
        })
    }

    function fiveFn(){
        setFive(prevValue =>{
            return !prevValue
        })
    }

    function sixFn(){
        setSix(prevValue =>{
            return !prevValue
        })
    }
    

   
  
  


    return <div className="inner-page">
    
{/* up1 section //////////////////////////////////// */}

    <div className="up1">
        <h1>  About</h1>
        <img src="../starter-code/assets/patterns/white-circles.svg" className="icon-circle" alt="icon-circle" />
    </div>

    {/* up2 section /////////////////////////////////////// */}

    <div className="up2">
        <div className="left-window">

        <div className="text-box">

            <h1>Mobility for the digital era</h1>
            <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to 
  provide low cost, smart access to scooters at your fingertips.
</p>

        </div>
            
        </div>
        <div className="right-window">
      <img  src="../starter-code/assets/images/digital-era.jpg" className="inner-pic" alt="digital"/>
      <img src="../starter-code/assets/patterns/left-upward-arrow.svg" className="arrow" alt="up-left-arrow"/>
      <img src="../starter-code/assets/patterns/circle.svg" className="semi-circle" alt="semi-circle"/>
      
        </div>
    </div>

    {/* mid1 section //////////////////////////////////////////// */}

        <div className="mid1">

        <div className="left-window">
        <img src="../starter-code/assets/patterns/right-arrow.svg" className= "arrow" alt="arrow"/>

        <img  src="../starter-code/assets/patterns/circle.svg" className="semi-circle" alt="semi-circle" />

        <img src="../starter-code/assets/images/better-living.jpg" className="inner-pic" alt="inner-pic"/>

        </div>
        <div className="right-window">

        <div className="text-box">

            <h1>  Better urban living</h1>
            <p>We’re helping connect cities and bring people closer together. Our scooters are also 
  fully-electric and we offset the minimal carbon footprint for each ride.
    </p>
        </div>
            
        </div>

        </div>


        {/* mid2 section //////////////////////////////////// */}

        <div className="mid2">
            <h1> Our values</h1>
            <div className="mid2Div">
                <div className="pic-container">

                    <img src="../starter-code/assets/images/our-tech.jpg" className="inner-pic" alt="inner-pic" />
                    <div className="number">01</div>
                </div>
                <div className="pic-container">
                <img src="../starter-code/assets/images/our-integrity.jpg" className="inner-pic" alt="inner-pic" /> 
                <div className="number">02</div> 
                </div>
                <div className="pic-container">

                <img src="../starter-code/assets/images/our-community.jpg" className="inner-pic" alt="inner-pic" />
                <div className="number">03</div>
                </div>
            </div>
            <div className="mid2Div">
                <div className="text-box">
                  <h4>Our tech</h4>
                    <p> We’re using cutting edge technology to drive accessible urban transportation forward. 
  Our fully electric scooters are a joy to ride!</p>
                </div>
                <div className="text-box text-mid">

                <h4>Our integrity</h4>
                <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience 
  in every city we serve.</p>
                </div>
                
                <div className="text-box">
                <h4>Our community</h4>
                <p>We support every community we serve. All workers are paid a living wage based on their 
  location and are Scoot employees.</p>
                </div>
            </div>
            
         </div>

    {/* FAQ section ///////////////////////////////////////////////// */}

    <div className="faq">

       <h1>FAQs </h1>
       

        <div className="left-window">
            <div className="sub-title title1">
                 <h2>How it works</h2>
            </div>
            <div className="sub-title title2">
                <h2>Safe driving</h2>
            </div> 
        </div>
    <div className="right-window">

          <div className="q-a-package">

          <div className="upper-part">
            <div className="question">
              <h4> How do I download the app?</h4>
             <img  src="../starter-code/assets/icons/chevron.svg" className="arrow-head head1" alt="arrow-head"  onClick={oneFn} style={one ? arrowStyle : null}/>
              
              {one ? 
              <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. 
  An even simpler way to do it would be to click the relevant link at the bottom of this 
  page and you’ll be re-directed to the correct page.</p>
                
             :null}

            </div>
            <div className="question">
              
             <h4>Can I find a nearby Scoots?</h4>
             <img  src="../starter-code/assets/icons/chevron.svg" className="arrow-head head2" alt="arrow-head" onClick={twoFn} style={two ? arrowStyle : null}/>
              
             {two ? 
              <p>Definitely! Simply open up the app and allow us to find your location while using it. We'll 
  show you all of the closest Scoots and some extra useful information. </p>

            :null}

            </div>
            <div className="question">
             
            <h4> Do I need a license to ride?</h4>
            <img  src="../starter-code/assets/icons/chevron.svg" className="arrow-head head3" alt="arrow-head" onClick={threeFn} style={three ? arrowStyle : null}/>
              
              {three ? 
              <p>Yup! We provide information inside the app regarding local laws and the license you need to be 
  able to ride our Scoots.</p>

             :null}

            </div>

            </div>

 <div className="lower-part">

            <div className="question mid-question">

<h4> Should I wear a helmet?</h4>
<img  src="../starter-code/assets/icons/chevron.svg" className="arrow-head head4" alt="arrow-head" onClick={fourFn} style={four ? arrowStyle : null}/>

{four ? 
<p>Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
always wearing a helmet regardless of the local laws. We like you and we want you to be as 
safe as possible while Scooting.</p>

:null}

</div>
<div className="question">

<h4>  How about the rules & regulations?</h4>
<img  src="../starter-code/assets/icons/chevron.svg" className="arrow-head head5" alt="arrow-head" onClick={fiveFn} style={five ? arrowStyle : null}/>

{five? 
<p>Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
block access to buildings or get in people's way.</p>

:null}

</div>
<div className="question">

<h4>What if I damage my Scoot?</h4>
<img  src="../starter-code/assets/icons/chevron.svg" className="arrow-head head6" alt="arrow-head" onClick={sixFn} style={six ? arrowStyle : null}/>

{six ? 
<p> Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
it as clear as possible. There's an option to add insurance for each trip, or you can sign 
up for annual insurance if you're a regular Scooter.</p>

:null}

</div>


            </div>
     
        </div>
     </div>


    </div>
        
       
</div>
}


export default About;