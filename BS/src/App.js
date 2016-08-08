import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    //console.log('hello');
    return(
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
