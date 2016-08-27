import React from 'react'
import {container} from '../utils'


class SearchUser extends React.Component {

  render() {
    return (
      <section className="search-view">
        <h3 className="min-title">User Search</h3>
    <div className="user-search-form">
      <span className="">
        <input placeholder="search users"></input>
        <i className="ion-search"></i>
      </span>
    </div>
    <div className="res-body">
      <p className="list-head">Popular users.</p>
      <ul>
        <li>
          <div className="icon-wra">
            <img src="/static/img/user.jpg" />
          </div>
          <div className="text-data">
            <h6>Wh11e7rue</h6>
            <p><a href="#">>> view profile</a></p>
          </div>
        </li>
        <li>
          <div className="icon-wra">
            <img src="/static/img/user.jpg" />
          </div>
          <div className="text-data">
            <h6>Wh11e7rue</h6>
            <p><a href="#">>> view profile</a></p>
          </div>
        </li>
        <li>
          <div className="icon-wra">
            <img src="/static/img/user.jpg" />
          </div>
          <div className="text-data">
            <h6>Wh11e7rue</h6>
            <p><a href="#">>> view profile</a></p>
          </div>
        </li>
        <li>
          <div className="icon-wra">
            <img src="/static/img/user.jpg" />
          </div>
          <div className="text-data">
            <h6>Wh11e7rue</h6>
            <p><a href="#">>> view profile</a></p>
          </div>
        </li>
        <li>
          <div className="icon-wra">
            <img src="/static/img/user.jpg" />
          </div>
          <div className="text-data">
            <h6>Wh11e7rue</h6>
            <p><a href="#">>> view profile</a></p>
          </div>
        </li>
      </ul>
    </div>
      </section>
    )
  }
}

export default container(SearchUser)