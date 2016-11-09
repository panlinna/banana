import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
    constructor(){
        super();
        this.state={
            title:'Home'
        }
    }
    getnowpage(){
        this.setState({
            title:this.context.router.isActive('/',true) ? 'Home' :
                this.context.router.isActive('/blog') ? 'Blog' :
                this.context.router.isActive('/work') ? 'Work' :
                this.context.router.isActive('/about') ? 'About' : 'Other'
        })
    }
    handleBack(){
        this.context.router.goBack();
    }
    componentWillMount(){
        this.getnowpage()
    }
    componentWillReceiveProps(){
        this.getnowpage()
    }
    render () {
        return(
            <div className="nav-header">
                <p className="glyphicon glyphicon-menu-left" aria-hidden="true" onClick={this.handleBack.bind(this)}></p>
                <h1>Zoey~@{this.state.title}</h1>
                <p className="glyphicon glyphicon-heart" aria-hidden="true"></p>
            </div>
        )
    }
}

NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NavHeader;
