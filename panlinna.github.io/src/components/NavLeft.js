import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class NavLeft extends React.Component {
    render () {
        return(
            <div className="nav-left">
                <div className="nav-left-top"><h1>nuan</h1></div>
                <Link activeStyle={{backgroundColor:'#333', color:'#fff',textDecoration:'none'}} onlyActiveOnIndex={true} to="/">
                    <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                    <span className="nav-left-span">Home</span>
                </Link>
                <Link activeStyle={{backgroundColor:'#333', color:'#fff',textDecoration:'none'}} to="/blog">
                    <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                    <span className="nav-left-span">Blog</span>
                </Link>
                <Link activeStyle={{backgroundColor:'#333', color:'#fff',textDecoration:'none'}} to="/work">
                    <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                    <span className="nav-left-span">Works</span>
                </Link>
                <Link activeStyle={{backgroundColor:'#333', color:'#fff',textDecoration:'none'}} to="/about">
                    <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    <span className="nav-left-span">About</span>
                </Link>
            </div>
        )
    }
}

export default NavLeft;
