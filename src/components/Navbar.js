import Logo from "../images/logo.png"

function Navbar(){
    return(
        <nav className="containerNavbar">
            <img src={Logo} alt=""></img>
        </nav>
    );
}

export default Navbar;