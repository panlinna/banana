import React,{Component} from 'react';


class LeftNav extends Component{
  constructor(){
    super():
      this.state={
        show:true
      }
    }
    handleToggle(){
      this.setState({
        show: !this.state.show
      })
    }
  render(){
    let show = this.state.show?'block' : 'none';
    var styles={
      root:{
        position:'absolute',
        top:'0',
        left:'0',
        right:'30%',
        bottom:'0',
        backgroundColor:'#bada55',
        display:show
      },
      list:{
        display:'block',
        textDecoration:'none',
        width:'100%',
        padding:'10px',
        color:'#fff',
        textAlign:'center',
        height:'40px',
        lineHeight:'40px'
      }
      cover:{
        position:'absolute',
      
      }
    };
    return(
      <div>
      <div onlick={this.handleToggle.bind(this)}></div>
        <div style={styles.root}>
          <a href="#" style={styles.list}>HOME</a>
          <a href="#" style={styles.list}>BLOG</a>
          <a href="#" style={styles.list}>ABOUT</a>
        </div>
      </div>
    )
  }
}
export default LeftNav;
