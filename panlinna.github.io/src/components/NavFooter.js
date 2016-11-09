import React, { PropTypes } from 'react'
import { Link } from 'react-router'


class NavFooter extends React.Component {
    render () {
        return(
            <div className="nav-footer">
                <Link activeStyle={{color:'#fff',textDecoration:'none'}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br /><span>Home</span></Link>
                <Link activeStyle={{color:'#fff',textDecoration:'none'}} to="/blog"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span><br /><span>Blog</span></Link>
                <Link activeStyle={{color:'#fff',textDecoration:'none'}} to="/work"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span><br /><span>Works</span></Link>
                <Link activeStyle={{color:'#fff',textDecoration:'none'}} to="/about"><span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span><br /><span>About</span></Link>
            </div>
        )
    }
}

export default NavFooter;
