import React, { PropTypes } from 'react'

class Home extends React.Component {
    clickgit(){

    }
    render () {
        return(
            <div className="home">
                  <h2>Welcome to <span>pan</span> home.</h2>
                  <h3 style={{color:'#777'}}>You can take a look at or go to <a href="https://github.com/panlinna" style={{color:'#fff'}}>my gitHub home</a> .</h3>
            </div>
        )
    }
}

export default Home;
