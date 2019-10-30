import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import HeaderProduct from './HeaderProduct'
import BgProduct from '../images/backgroundImage/bgdolomit.jpg'
import NPKGranul from '../images/productImage/NPKGranul.png'
import dolomit from '../images/productImage/1dolomit.png'

var styles ={
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BgProduct})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

class ProductDetailSatu extends Component{
    render(){

        
        return(
            <div style={styles}>
                <HeaderProduct/>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                        <div className="row mt-5 mx-auto">
                            <div className="card bg-transparent border-0" >
                                <div>
                                <img style={{width:550, marginLeft:110, marginTop:110}} src={dolomit} className="card-img-top " alt="..."/>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className="col">
                        <div className="row my-2 ml-5">
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title text-light">Dolomit (Magfertil®  & Premium 100®)</h1>
                                    <h5 className="card-text text-light">Magfertil® merupakan transformasi dari Super Dolomit® dan merupakan Pupuk Magnesium 
                                    dari batuan Dolomit berkualitas tinggi yang di proses pada suhu 700-800°C (Half Burned). Magfertil® memiliki 
                                    kandungan MgO yang tinggi (20%-22%) dan mampu larut dalam asam sitrat minimal 16%. Pupuk Magfertil® memberikan 
                                    jaminan mutu kandungan dan komposisi yang tepat sebagai sumber hara Mg dan Ca serta sebagai pembenah tanah.
                                    </h5>
                                </div>
                            </div>
                    
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title text-light">Keunggulan</h1>
                                    <h4 className="card-text text-light">
                                    Kehalusan dan kelarutan yang tinggi sehingga unsur haranya mudah diserap tanaman.<br/>
                                    Reaktivitas tinggi sehingga lebih efisies dan efektif bagi tanaman.<br/>
                                    Mempunyai kemampuan untuk menurunkan/menetralkan keasaman tanah.<br/>
                                    Harga lebih kompetitif (bersaing) untuk menggantikan kieserite.<br/>
                                    </h4>
                                </div>
                            </div>

                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h1 className="card-title text-light">Spesifikasi</h1>
                                    <div className="row text-light">
                                        <div className="col">
                                            <h4>Sifat Fisik</h4>
                                            <h5 className="card-text">
                                            Bentuk		: Powder<br/>
                                            Ukuran		: 100 mesh lolos 95%<br/>
                                            Warna		: Putih bersih<br/>
                                            Kadar air	: max. 1%<br/>
                                            Berat jenis	: 1,25<br/>
                                            </h5>
                                        </div>

                                        <div className="col">
                                            <h4>Sifat Kimia</h4>
                                            <h5 className="card-text">
                                            Kadar MgO (%)				: ≥ 20<br/>
                                            MgO larut Asam Sitrat (%)		: ≥ 16<br/>
                                            Kadar CaO (%)				: ± 30<br/>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="my-auto" style={{borderRadius:20}}>
                                    <Link to="/productdua"> 
                                        <button className="btn btn-primary mr-5 my-auto">Next</button>
                                    </Link>
                                </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default ProductDetailSatu