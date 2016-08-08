import React from 'react';

class Footer extends React.Component {

  render () {
    let styles={
      root:{
        width:'100%',
        height:'100px',
        backgroundColor:'red',
        background: 'url("./images/77.png") no-repeat fixed center center/cover'
      }
    }
    return(
      <div style={styles.root}>

      </div>
    )
  }
}

export default Footer;
