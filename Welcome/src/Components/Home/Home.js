import React from 'react';
import Work from './Work';

class Home extends React.Component {
  render () {
    let styles={
    root:{
      width:'100%',
      height:'100vh',
      background: 'url("https://raw.githubusercontent.com/happypeter/big-demo/gh-pages/img/newming24.jpg") no-repeat fixed center center/cover'
    }
  }
    return(
      <div>
        <div style={styles.root}>
        </div>
        <Work />
      </div>
    )
  }
}

export default Home;
