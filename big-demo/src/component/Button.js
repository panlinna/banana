import React,{Component} from 'react';

class Button extends Component{
  getStyles(){
    return{
      root:{
        display:'block',
        margin:'0 auto',
        width:'50px',
        height:'30px'
      }
    }
  }
  render(){
    let styles=this.getStyles();
    return (
      <div>
        <button style={styles.root}>click</button>
        <LeftNav ref="leftnav" />
      </div>

    )
  }
}
export default Button;
