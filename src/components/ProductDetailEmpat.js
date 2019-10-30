import React, { Component } from 'react'

import HeaderProduct from './HeaderProduct'
import BgProduct from '../images/backgroundImage/bgbriketpullet.jpg'
import NPKGranul from '../images/productImage/npkTablet.png'
import TabelGranul from '../images/tableImage/TabelTablet.jpg'

var styles ={
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BgProduct})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    hover: "shadow"
}

class ProductDetailEmpat extends Component{
    render(){

        
        return(
            <div style={styles}>
                <HeaderProduct/>
                
                <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                        <div className="row mt-5">
                            <div className="card border-0 bg-transparent" >
                                <div>
                                <img style={{width:550, marginLeft:110}} src={NPKGranul} className="card-img-top " alt="..."/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card bg-transparent" >
                                <div>
                                <img style={{width:655, marginLeft:80}}  src={TabelGranul} className="card-img-top" alt="..."/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col">
                        <div className="row my-2 ml-5">
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title">NPK Tablet Pullet</h1>
                                    <h5 className="card-text">NPK TABLET – PULLET merupakan Pupuk Majemuk Lengkap Lepas Terkendali (PMLT) 
                                    dalam bentuk tablet yang terbuat dari komposisi dan unsur hara yang lengkap sesuai kebutuhan tanaman 
                                    dengan Teknik pembuatan dan kemasan khusus.
                                    </h5>
                                </div>
                            </div>
                    
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title">Keunggulan</h1>
                                    <h5 className="card-text">
                                    Meningkatkan efisiensi pemupukan secara signifikan <br/>
                                    Menekan serendah-rendahnya kehilangan unsur hara oleh fiksasi partikel tanah, volatisasi dan pencucian.<br/>
                                    Mensuplai unsur hara tanaman dalam jumlah, perbandingan, maupun kontinuitas lebih baik di banding pupuk tunggal.<br/>
                                    Mengurangi biaya pemupukan 10 – 15%<br/>
                                    Mampu mensuplai unsur hara selama 8 – 12 bulan.
                                    </h5>
                                </div>
                            </div>

                            <div className="card bg-transparent border-0">
                                <div className="card-body">
                                    <h1 style={{}} className="card-title">Spesifikasi</h1>
                                    <h5 className="card-text">
                                    Bentuk	    	: Tablet @ 10 gr<br/>
                                    Formulasi		: N, P, K, Mg, Ca, S Plus Unsur Mikro<br/>
                                    Kelarutan	: 8 s/d 12 Bulan<br/>
                                    Kemasan	: Kantung Plastik isi 5 KG <br/>
                                            Dalam Kotak Karton Isi 20 Kg/ 50Kg
                                            <br/>
                                    </h5>
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

export default ProductDetailEmpat