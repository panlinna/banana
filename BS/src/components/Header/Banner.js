import React from 'react';

class Banner extends React.Component {

  render () {
    let styles={
      root:{
        width:'100%',
        height:'100vh',
      }
    }
    return(
      <div style={styles.root}>
          <img src='../images/02.png' />
      </div>
    )
  }
}

export default Banner;
