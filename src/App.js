import React, { Component } from 'react';
import Projects from './Projects'
import cx from 'classnames';

// css
import './App.css';
import 'font-awesome/css/font-awesome.css';

// img
import avatar from './moi.jpg';


class App extends Component {

  constructor() {
      super();
      this.state = {
        projects: [
          {
            title: 'Application de sondages',
            frameworks: ['react', 'node', 'redux'],
            tags: ['mongodb', 'es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'cookies-session'],
            demo: '',
            code: 'https://github.com/profoundhub/FCC-Voting-App'
          },
          {
            title: 'Coordination Nocturne',
            frameworks: ['react', 'node', 'redux'],
            tags: ['mongodb', 'es6', 'react-router', 'redux-thunk', 'webpack', 'express', 'passport', 'jwt'],
            demo: '',
            code: 'https://github.com/zelol/nightlifeapp'
          },
          {
              title: 'Le Jeu de la Vie',
              frameworks: ['react'],
              tags: ['es6', 'babel', 'sass', 'normalize', 'autoprefixer'],
              code: 'http://codepen.io/zelol/pen/ORAmbd',
              demo: 'http://codepen.io/zelol/full/ORAmbd',
            },
            {
              title: 'Prévisualisateur Markdown',
              frameworks: ["react"],
              tags: ['es6', 'babel', 'sass', 'normalize', 'autoprefixer'],
              code: 'https://codepen.io/zelol/pen/QKJoKv',
              demo: 'https://codepen.io/zelol/full/QKJoKv',
            },
          {
              title: 'Boite à Recettes',
              frameworks: ['react'],
              tags: ['es6', 'babel', 'sass', 'normalize', 'autoprefixer'],
              code: 'https://codepen.io/zelol/pen/VKVkyq',
              demo: 'https://codepen.io/zelol/full/VKVkyq'

            },
            {
              title: 'Classement Campeurs',
              frameworks: [],
              tags: ['es6', 'babel', 'sass', 'normalize', 'autoprefixer'],
              code: 'http://codepen.io/zelol/pen/QKVrKZ',
              demo: 'http://codepen.io/zelol/full/QKVrKZ'
            },
            {
              title: 'Bar Chart: PIB des USA',
              frameworks: ['d3'],
              tags: ['es6', 'svg', 'v4'],
              code: 'http://codepen.io/zelol/pen/EgzpjV',
              demo: 'http://codepen.io/zelol/full/EgzpjV'
            },
            {
              title: 'Portfolio',
              frameworks: ['react'],
              tags: ['es6', 'create-react-app', 'BEM'],
              code: 'https://github.com/zelol/portfolio',
              demo: 'https://sebastien-leon-flores.herokuapp.com/'
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
          <h1>Voici mon <strong>portfolio</strong>, vous trouverez un échantillon des projects que j'ai crée ou auxquels<br/> j'ai participé en tant que Développeur full stack orienté javascript.</h1>
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
