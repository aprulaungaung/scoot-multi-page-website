import Button from './Button';



function Navbar(props){

    let footer = props.footer


    let brandStyle = {position: "relative", display:"block",top:"0"};
    let menuPackageStyle = {position:"relative", display:"block",textAlign:"center",top:"-40px",left:"0",opacity:"0.5"};
    let subMenuStyle = {textDecoration: "none"}

    return <div className="nav-container">
        <nav className="titlebar">
        {!footer ? 
        <label className="hamburger" htmlFor="checkbox">
            <img src="../starter-code/assets/icons/hamburger.svg" className="hamburger-icon" alt="hamburger"/>
        </label>

        :null}

            <div className="brand" onClick={props.home} style={footer ? brandStyle : null}>
                <h1>scoot</h1>
            </div>
            <input type="checkbox" id="checkbox"/>
            <ul className="menu-package" style={footer ? menuPackageStyle : null}>

            <li className="sub-menu" style={footer ? subMenuStyle : null} onClick={props.about}>About</li>
            <li className="sub-menu" style={footer ? subMenuStyle : null}>Location</li>
            <li className="sub-menu" style={footer ? subMenuStyle : null}>Careers</li>

            </ul>
        </nav>

        {!footer ?

        <div className="nav-button"><Button innerText="Get Scootin" /> </div>

        :
        null}
  
    </div>
}


export default Navbar;