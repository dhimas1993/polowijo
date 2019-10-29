import React, { Component } from 'react'

import HeaderProduct from './HeaderProduct'
import BgProduct from '../images/backgroundImage/BgProduct1.png'
import NPKGranul from '../images/productImage/NPKGranul.png'
import TabelBriket from '../images/tableImage/TabelBriket.jpg'

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
                
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="row mt-5">
                            <div className="card bg-transparent" >
                                <div >
                                <img src={NPKGranul} className="card-img-top " alt="..."/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card bg-transparent" >
                                <div>
                                <img src={TabelBriket} className="card-img-top ml-3" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row my-2 ml-5">
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">NPK Briket Pullet</h5>
                                    <p className="card-text">NPK BRIKET – PULLET merupakan pupuk majemuk NPK LENGKAP berbentuk briket 
                                    dengan kandungan unsur hara makro, dan dilengkapi unsur mikro essensial yang mutlak dibutuhkan 
                                    tanaman. Dengan kandungan bahan lepas lambat yang sesuai untuk tanaman semusim dan tahunan.
                                    Cocok untuk ditanah yang memiliki kemiringan + 45°.
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">Spesifikasi</h5>
                                    <p className="card-text">
                                    Bentuk		: Briket<br/>
                                    Ukuran		: 1 – 1.5 gram/butir<br/>
                                    Kadar Air (%)	:  4 %<br/>
                                    Kemasan	:@ 25 Kg/Zak
                                            Karung polipropilene dengan inner Liner Polietilene<br/>
                                    </p>
                                </div>
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