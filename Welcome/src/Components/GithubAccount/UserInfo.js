import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className='user-info'>
        <img src={userInfo.avatar_url} />
        <ul>
          <li>
            <b>{userInfo.followers}</b>
            <span>followers</span>
          </li>
          <li>
            <b>{userInfo.following}</b>
            <span>following</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserInfo;
