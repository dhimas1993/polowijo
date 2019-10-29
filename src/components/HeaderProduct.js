import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../images/headerImage/HomeIcon.jpg'
import LogoHome from '../images/headerImage/LogoHome.png'

class HeaderProduct extends Component{
    render(){

        var styles = {
            height:'50px', width:'50px'
        }
        var stylesLogo = {
            height: '50px', width: '175px'
        }
        return(
            <div>
                <nav class="navbar navbar-light bg-light">
                    <Link to="/">
                            <img src={LogoHome} className="navbar-brand" alt="foto 1" style={stylesLogo}/>
                    </Link>
                    <form class="form-inline">
                        <Link to="/">
                            <img src={HomeIcon} className="my-2 my-sm-0 mx-2" alt="foto 1" style={styles}/>
                        </Link>
                    </form>
                </nav>
            </div>
        )
    }
}
export default HeaderProduct