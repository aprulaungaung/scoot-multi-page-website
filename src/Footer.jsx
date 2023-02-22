
import Navbar from './Navbar';

function Footer(props){

    let footerStyle = {
        position: "relative",
        top: "50px"
    };

    return <div className="footer" style={props.inner ? footerStyle : null}>
        
            <h1 className="sign-up">Sign up and Scoot off today</h1>
            <div className="apple">
                <img src="../starter-code/assets/icons/app-store.svg" className="icon-apple" alt="apple"/>
            </div>
            <div className="google">
            <img src="../starter-code/assets/icons/google-play.svg" className="icon-google" alt="google"/>  
            </div>

            <div className="halfCircle-container">
            <img src="../starter-code/assets/patterns/semi-circles.svg" className="half-circles" alt="half-circle"/>
            </div>
            <div className="bottom-line">
            
             <div className="bottom-nav">

             <Navbar footer="hey.. I am Mr Footer"/>

             </div>
            <div className="bottom-icon">
            <img  src="../starter-code/assets/icons/facebook.svg" className="social-media" alt="bottom-icom"/>
            <img  src="../starter-code/assets/icons/twitter.svg" className="social-media" alt="bottom-icom"/>
            <img  src="../starter-code/assets/icons/instagram.svg" className="social-media" alt="bottom-icom"/>
            </div>

            </div>
        </div>
    
}

export default Footer;