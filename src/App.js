import React, { Component } from 'react';
import Projects from './Projects'
import cx from 'classnames';

// css
import './App.css';
import 'font-awesome/css/font-awesome.css';

// img
import avatar from './avatar.jpg';


class App extends Component {

  constructor() {
      super();
      this.state = {
        projects: [
          {
            title: 'sondages app',
            frameworks: ['react', 'node', 'redux'],
            tags: ['mongodb', 'es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'cookies-session'],
            demo: '',
            code: 'https://github.com/profoundhub/FCC-Voting-App'
          },
          {
            title: 'coordination nocturne',
            frameworks: ['react', 'node', 'redux'],
            tags: ['mongodb', 'es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'jwt'],
            demo: '',
            code: 'https://github.com/zelol/nightlifeapp'
          },
          {
              title: 'Le jeu de la vie',
              frameworks: ['react'],
              tags: ['mongodb', 'es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'jwt'],
              code: 'http://codepen.io/zelol/pen/ORAmbd',
              demo: 'http://codepen.io/zelol/full/ORAmbd',
            },
            {
              title: 'Prévisualisateur markdown',
              frameworks: ["react"],
              tags: ['es6', 'markdown'],
              code: 'https://codepen.io/zelol/pen/QKJoKv',
              demo: 'https://codepen.io/zelol/full/QKJoKv',
            },
          {
              title: 'boite à recettes',
              frameworks: ['react'],
              tags: ['es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'jwt'],
              code: 'https://codepen.io/zelol/pen/VKVkyq',
              demo: 'https://codepen.io/zelol/full/VKVkyq'

            },
            {
              title: 'classement campeurs',
              frameworks: [],
              tags: ['es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'jwt'],
              code: 'http://codepen.io/zelol/pen/QKVrKZ',
              demo: 'http://codepen.io/zelol/full/QKVrKZ'
            },
            {
              title: 'Bar Chart: PIB des USA',
              frameworks: ['d3'],
              tags: ['es6', 'svg', 'd3 v4'],
              code: 'http://codepen.io/zelol/pen/EgzpjV',
              demo: 'http://codepen.io/zelol/full/EgzpjV'

            }
        ]
      }
  }

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
        <Projects list={this.state.projects}/>
        <footer id="footer">
          <p>© Sebastien LEON FLORES. All rights reserved. Inspired by TEMPLATED.CO/VISUALIZE</p>
        </footer>
      </div>
    );
  }
}

export default App;
