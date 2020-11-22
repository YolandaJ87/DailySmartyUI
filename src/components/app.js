import React, { Component } from 'react';
import Logo from "./logo";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="logo">
          <div>
            <Logo />
          </div>
        </div>

        <div className="search">
          <input placeholder="daily smarty"/>
        </div>

        <div className="recent">
          <ul>
            <li>post</li>
            <li>post</li>
            <li>post</li>
          </ul>
        </div>
      </div>
    );
  }
}
