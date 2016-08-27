import React from 'react'
import {container} from '../utils'


class User extends React.Component {

  render() {
    return (
      <section className="user-view">
        <h3 className="min-title">User profile</h3>
        <div className="info-wra">
          <div className="user-info">
            <div className="icon-box">
              <img src="/static/img/user.jpg"/>
            </div>
            <div className="user-text">
              <h6 className="screen_name">wh11e7rue</h6>
              <p>High score : 114514810 </p>
              <p>Favorite : 「Hello,My Friend」</p>
              <div className="Twitter">
                <i className="ion-social-twitter"></i>
              </div>  
            </div>
          </div>
        </div>
        <div className="action-link">
          <div><i className="ion-log-in"></i></div>
          <div><i className="ion-person-stalker"></i></div>
          <div><i className="ion-ios-home"></i></div>
        </div>
      </section>
    )
  }
}

export default container(User)
