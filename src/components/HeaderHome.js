import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoHome from '../images/headerImage/LogoHome.png'

class HeaderHome extends Component{
    render(){
        var stylesLogo = {
            height: '80px'
        }
        return(
            <div>
                <nav class="navbar navbar-light bg-transparent">
                    <Link to="/">
                            <img src={LogoHome} className="navbar-brand" alt="foto 1" style={stylesLogo}/>
                    </Link>
                </nav>
            </div>
        )
    }
}
export default HeaderHome