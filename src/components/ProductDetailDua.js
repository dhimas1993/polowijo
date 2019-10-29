import React, { Component } from 'react'

import HeaderProduct from './HeaderProduct'
import BgProduct from '../images/backgroundImage/BgProduct1.png'
import NPKGranul from '../images/productImage/NPKGranul.png'
import TabelGranul from '../images/tableImage/TabelGranul.jpg'

var styles ={
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BgProduct})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

class ProductDetailDua extends Component{
    render(){

        
        return(
            <div style={styles}>
                <HeaderProduct/>
                <div className="container mx-auto">
                    <div className="row">
                    <div className="col">
                        <div className="row mt-5">
                            <div className="card bg-transparent mx-auto" >
                                <div>
                                <img src={NPKGranul} className="card-img-top " alt="..."/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card bg-transparent" >
                                <div>
                                <img src={TabelGranul} className="card-img-top ml-3" alt="..."/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col">
                        <div className="row my-2 ml-5">
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">NPK Granul Pullet</h5>
                                    <p className="card-text">Pupuk Majemuk NPK PULLET merupakan pupuk majemuk NPK LENGKAP dengan kandungan unsur 
                                    hara Makro (N-P-K-Mg) dan dilengkapi dengan unsur hara makro essensial (Zn-Cu-B) yang mutlak di butuhkan tanaman,
                                    sehingga NPK PULLET memberikan jaminan keseragaman penyebaran semua unsur hara agar pertumbuhan dan produktifitas 
                                    dari tanaman maksimal.
                                    </p>
                                </div>
                            </div>
                    
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">Keunggulan</h5>
                                    <p className="card-text">
                                        Berbentuk Granul yang mantap dan tidak mudah hancur<br/>
                                        Tahan lama dan mempermudah proses penyimpanan<br/>
                                        Dengan bentuk Granul, aplikasi pupuk dapat dilakukan dengan mudah<br/>
                                        Bentuk Granul kombinasi bahan khusus menjadikan PULLET mudah diserap<br/>
                                        Formulasi khusus untuk tanaman, agar dapat tumbuh dan berproduksi dengan hasil yang optimal<br/>
                                        Manfaat dan efektifitas yang tinggi dengan harga yang sangat kompetitif<br/>

                                    </p>
                                </div>
                            </div>

                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">Spesifikasi</h5>
                                    <p className="card-text">
                                    Bentuk		: Granul<br/>
                                    Ukuran		: 2-4 mm / butir <br/>
                                    Kadar Air (%)	:  2 %<br/>
                                    Kemasan	: @ 25 Kg/Zak dan 50 Kg/Zak<br/>
                                    Karung poloporpilene dengan inne Liner Polietilene<br/>
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

export default ProductDetailDua