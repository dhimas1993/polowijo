import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import HeaderProduct from './HeaderProduct'
import BgProduct from '../images/backgroundImage/bgbriket.jpg'
import NPKGranul from '../images/productImage/npkBriket.png'
import TabelBriket from '../images/tableImage/TabelBriket.jpg'

import './table.css'

var styles ={
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BgProduct})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

class ProductDetailTiga extends Component{
    render(){

        
        return(
            <div style={styles}>
                <HeaderProduct/>
                
                <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                        <div className="row mt-5 ">
                            <div className="card border-0 bg-transparent" >
                                <div >
                                <img style={{width:550, marginLeft:110}} src={NPKGranul} className="card-img-top " alt="..."/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card bg-transparent" >
                                <div className="table1">
                                <img style={{width:655, marginLeft:80}} src={TabelBriket} className="card-img-top" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row my-2 ml-5">
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title text-light">NPK Briket Pullet</h1>
                                    <h4 className="card-text text-light">NPK BRIKET – PULLET merupakan pupuk majemuk NPK LENGKAP berbentuk briket 
                                    dengan kandungan unsur hara makro, dan dilengkapi unsur mikro essensial yang mutlak dibutuhkan 
                                    tanaman. Dengan kandungan bahan lepas lambat yang sesuai untuk tanaman semusim dan tahunan.
                                    Cocok untuk ditanah yang memiliki kemiringan + 45°.
                                    </h4>
                                </div>
                            </div>

                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title text-light">Spesifikasi</h1>
                                    <h4 className="card-text text-light">
                                    Bentuk		: Briket<br/>
                                    Ukuran		: 1 – 1.5 gram/butir<br/>
                                    Kadar Air (%)	:  4 %<br/>
                                    Kemasan	:@ 25 Kg/Zak
                                            Karung polipropilene dengan inner Liner Polietilene<br/>
                                    </h4>
                                </div>
                            </div>
                            <div className="mt-5 mx-auto" style={{borderRadius:20}}>
                                    <Link to="/productempat"> 
                                        <button className="btn btn-primary mr-5 my-auto">Next</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetailTiga