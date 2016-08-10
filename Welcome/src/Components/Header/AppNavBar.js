import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class AppNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle(){ this.setState({open: !this.state.open})}
  handleClose (){ this.setState({open: false})}
    componentWillReceiveProps() {
      this.setNavState();
    }
    componentDidMount(){
      this.setNavState();
    }
    setNavState(){
      this.setState({
        title:this.context.router.isActive('/', true) ? 'HOME' :
          this.context.router.isActive('/blog')? 'BLOG' :
          this.context.router.isActive('/about')? 'ABOUT' : 'HOME'
      });
    }
  render() {
    //console.log(this.context.router);
    let styles={
      menu:{
        textAlign:'center'
      },
      smallIcon:{
        width:'32px',
        height:'32px'
      },
      small:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px'
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'75px',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px',
        marginTop: '0'
      }
    }
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>{this.state.title}</p>
         <MenuItem onTouchTap={this.handleClose.bind(this)}>
           <Link to="/" style={styles.link}  onlyActiveOnIndex={true}>首页</Link>
         </MenuItem>
         <MenuItem onTouchTap={this.handleClose.bind(this)}>
           <Link to="blog" style={styles.link} >博客</Link>
         </MenuItem>
         <MenuItem onTouchTap={this.handleClose.bind(this)}>
           <Link to="about" style={styles.link} >关于</Link>
         </MenuItem>
        </Drawer>
      </div>
    );
  }
}
AppNavBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default AppNavBar;
