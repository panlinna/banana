import React from 'react';
import GithubAccount from '../GithubAccount/GithubAccount';
import ECharts from './ECharts';

class About extends React.Component {

  render () {
    return(
      <div>
        <GithubAccount />
        <ECharts />
      </div>
    )
  }
}

export default About;
