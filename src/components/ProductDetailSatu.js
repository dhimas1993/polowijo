import React, { Component } from 'react'

import HeaderProduct from './HeaderProduct'
import BgProduct from '../images/backgroundImage/BgProduct1.png'
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
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="row mt-5">
                            <div className="card bg-transparent" >
                                <div>
                                <img src={dolomit} className="card-img-top " alt="..."/>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className="col">
                        <div className="row my-2 ml-5">
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">Dolomit (Magfertil®  & Premium 100®)</h5>
                                    <p className="card-text">Magfertil® merupakan transformasi dari Super Dolomit® dan merupakan Pupuk Magnesium 
                                    dari batuan Dolomit berkualitas tinggi yang di proses pada suhu 700-800°C (Half Burned). Magfertil® memiliki 
                                    kandungan MgO yang tinggi (20%-22%) dan mampu larut dalam asam sitrat minimal 16%. Pupuk Magfertil® memberikan 
                                    jaminan mutu kandungan dan komposisi yang tepat sebagai sumber hara Mg dan Ca serta sebagai pembenah tanah.
                                    </p>
                                </div>
                            </div>
                    
                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">Keunggulan</h5>
                                    <p className="card-text">
                                    Kehalusan dan kelarutan yang tinggi sehingga unsur haranya mudah diserap tanaman.<br/>
                                    Reaktivitas tinggi sehingga lebih efisies dan efektif bagi tanaman.<br/>
                                    Mempunyai kemampuan untuk menurunkan/menetralkan keasaman tanah.<br/>
                                    Harga lebih kompetitif (bersaing) untuk menggantikan kieserite.<br/>
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-transparent border-0" >
                                <div className="card-body">
                                    <h5 className="card-title">Spesifikasi</h5>
                                    <div className="row">
                                        <div className="col">
                                            <h6>Sifat Fisik</h6>
                                            <p className="card-text">
                                            Bentuk		: Powder<br/>
                                            Ukuran		: 100 mesh lolos 95%<br/>
                                            Warna		: Putih bersih<br/>
                                            Kadar air	: max. 1%<br/>
                                            Berat jenis	: 1,25<br/>
                                            </p>
                                        </div>

                                        <div className="col">
                                            <h6>Sifat Kimia</h6>
                                            <p className="card-text">
                                            Kadar MgO (%)				: ≥ 20<br/>
                                            MgO larut Asam Sitrat (%)		: ≥ 16<br/>
                                            Kadar CaO (%)				: ± 30<br/>
                                            </p>
                                        </div>
                                    </div>
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

export default ProductDetailSatu