import React from "react";
import { Link } from 'react-router-dom'
import * as MdIcons from "react-icons/md"
import * as TbIcons from "react-icons/tb"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi"
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa"
import * as GiIcons from "react-icons/gi"
import { IconContext } from "react-icons";
import { Button } from "./pages/Button";
import './Pricing.css'


const Pricing = () =>{
    return(
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing___heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaIcons.FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsIcons.BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>100 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,000 limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiIcons.GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$86.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>1060 Transactions</li>
                                    <li>36.5% Cash Back</li>
                                    <li>$1100,000 limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}


export default Pricing;