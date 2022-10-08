import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import * as MdIcons from "react-icons/md"
import * as TbIcons from "react-icons/tb"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi"
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa"
import './Navbar.css'
import { IconContext } from "react-icons";


const Navbar = () =>{

    const [click, setClick] = React.useState(false)
    const[button,setButton] = React.useState(true)

    const handleClick = () =>{
        setClick(prev => !prev)
    }

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    React.useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize',showButton )


    return(
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <MdIcons.MdFingerprint className="navbar-icon"/>
                        LAVISH
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                    
                        <li className="nav-btn">
                            {button ? (
                                <Link to="/sign-up">
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ): (
                                <Link to="/sign-up" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >SIGN UP</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
            </IconContext.Provider>
        </>
       
    )
}

export default Navbar;