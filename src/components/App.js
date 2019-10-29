import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Home from './Home'

import ProductDetailSatu from './ProductDetailSatu'
import ProductDetailDua from './ProductDetailDua'
import ProductDetailTiga from './ProductDetailTiga'
import ProductDetailEmpat from './ProductDetailEmpat'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
  
                <Route path="/" exact component={Home}/>
                <Route path="/productsatu" exact component={ProductDetailSatu}/>
                <Route path="/productdua" exact component={ProductDetailDua}/>
                <Route path="/producttiga" exact component={ProductDetailTiga}/>
                <Route path="/productempat" exact component={ProductDetailEmpat}/>
            </BrowserRouter>
        )
    }
}

export default App