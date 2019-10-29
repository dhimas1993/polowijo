import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MagFertil from '../images/magFertil.png'
import Pullet from '../images/pullet.png'
import HeaderHome from './HeaderHome'
import BgHome from '../images/backgroundImage/BgHome.png'
import NPKBriket from '../images/NPKBriket.png'
import NPKPulletTablet from '../images/NPKPulletTablet.png'

import "./Home.css"

var styles = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BgHome})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}

class Home extends Component{
    render(){
        return(
            <div style={styles}>
            <HeaderHome/>
            <div className="container" style={{marginTop:120}}>
                <div className="row mt-5">
                    <div className="card border-0 col m-2" style={{borderRadius: "7%"}}>
                        <Link to="/productsatu">
                        <img src={MagFertil} className="card-img-top mx-auto" alt="foto 1"/>
                        <div className="card-body ">
                            <button className="btn mx-auto card-title text-light bg-primary">Dolomit (Magfertil®  & Premium 100®)</button>
                        </div>  
                        </Link>
                    </div>

                    <div className="card  border-0 col m-2" style={{borderRadius: "7%"}}>
                        <Link to="/productdua">
                        <img src={Pullet} className="card-img-top mx-auto" alt="foto 2"/>
                        <div className="card-body">
                            <button className="btn card-title mx-auto text-light bg-primary">PUPUK NPK GRANUL PULLET</button>
                        </div>  
                        </Link>
                    </div>

                    <div className="card  border-0 col m-2" style={{borderRadius: "7%"}}>
                        <Link to="/producttiga">
                        <img src={NPKBriket} className="card-img-top mx-auto" alt="foto 3"/>
                        <div className="card-body">
                            <button className="btn card-title mx-auto text-light bg-primary">PUPUK NPK TABLET PULLET</button>
                        </div>
                        </Link>  
                    </div>

                    <div className="card border-0 col m-2" style={{borderRadius: "7%"}}>
                        <Link to="/productempat">
                        <img style={{marginTop:100 }} src={NPKPulletTablet} className="card-img-top mx-auto mb-4" alt="foto 4"/>
                        <div className="card-body">
                        <button className=" btn text-light bg-primary mt-5 mx-auto"> PUPUK NPK BRIKET PULLET</button>
                        </div>  
                        </Link>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default Home