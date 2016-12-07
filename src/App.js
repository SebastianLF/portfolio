import React, { Component } from 'react';
import cx from 'classnames';
import './normalize.css';
import './index.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import avatar from './avatar.jpg';

const Overlay = (props) => {
  const overlayClass = cx('overlay', {'active': this.state.hover });

  return (
    <div className={overlayClass}>
      <a href="#" target="_blank" type="button" name="demo">demo</a>
      <a href="#" target="_blank" type="button" name="code">code</a>
    </div>
  )
}

import javascript from './javascript.svg';
import react from './react.svg';
import node from './node.svg';
import mongodb from './mongodb.svg';

class Project extends Component {

  render() {
    return (
      <section className="project">
          <h3>Voting app</h3>
          <ul className="frameworks">
            <li><img src={javascript} alt="javascript" /></li>
            <li><img src={react} alt="react" /></li>
            <li><img src={node} alt="node" /></li>
          </ul>
          <ul className="tags">
            <li>es6</li>
            <li>react-router</li>
            <li>redux-thunk</li>
            <li>webpack</li>
            <li>heroku</li>
          </ul>
          <ul className="links">
            <a href="" alt="demo link">demo</a>
            <a href="" alt="code link">code</a>
          </ul>
      </section>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div id="wrapper">
        <header id="header">
          <span className="avatar">
            <img src={avatar} alt="avatar profile" />
          </span>
          <h1>This is my <strong>portfolio</strong>, a list of multiple projects i participed or
            created <br/> as a javascript full stack developper.</h1>
          <ul className="icons">
            <li><a href="#" className="fa fa-free-code-camp"></a></li>
            <li><a href="#" className="fa fa-github"></a></li>
          </ul>
        </header>
        <section id="main">
          <section className="thumbnails">
            <Project />
            <Project />
            <Project />
            <Project />
          </section>
        </section>
        <footer id="footer">
          <p>© Sebastien LEON FLORES. All rights reserved. Inspired by TEMPLATED.CO/VISUALIZE</p>
        </footer>
      </div>
    );
  }
}

export default App;
