import React, { Component } from 'react';
import cx from 'classnames';
import './index.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import avatar from './avatar.jpg';
import project1 from './01.jpg';

class Project extends Component {

  constructor() {
    super();
    this.state = { hover: false }
  }

  hideOverlay(e) {
    this.setState({
      hover: false
    })
  }

  displayOverlay(e) {
    this.setState({
      hover: true
    })
  }

  render() {
    const overlayClass = cx('overlay', {'active': this.state.hover });
    return (
      <div onMouseEnter={this.displayOverlay.bind(this)} onMouseLeave={this.hideOverlay.bind(this)} className="project">
          <div className={overlayClass}>
            <a href="#" target="_blank" type="button" name="demo">demo</a>
            <a href="#" target="_blank" type="button" name="code">code</a>
          </div>
          <img src={project1} alt="" />
          <div className="infos">
            <h3>Voting app</h3>
          </div>
      </div>
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
            <div className="">
              <a href="#">
                <h3>Test</h3>
              </a>
            </div>
            <div className="">
              <a href="#">
                <h3>Test</h3>
              </a>
            </div>
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
