import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Button from './component/Button.js';
import LeftNav from './component/LeftNav.js';
import './stylesheet'
class APP extends Component{
  render(){
    return(
      <button></button>
    )
  }
}
ReactDOM.render(<APP/>,document.getElementById('app'));
