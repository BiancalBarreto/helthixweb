import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import healthix from './healthix.png'



function NavBar() {
    return(
        <>
        <div id="main">
            <div className="sidebar" >
        
                <Link ><img src={healthix} className="App-logo" alt="logo" /></Link>
                <Link to="/Home" className='menu-bars' >Inicio</Link>
                <Link to="MinhaConta" className='menu-bars' >Minha conta</Link>
                <Link to="Ebooks" className='menu-bars' >E-books</Link>
                <Link to="Sair" className='menu-bars' >Sair</Link>
            </div>
        </div>
        

        </>
    )

}

export default NavBar;


