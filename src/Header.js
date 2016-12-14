import React, { PropTypes } from 'react'

// css
import './header.css'

// img
import avatar from './moi.jpg';

const Header = (props) => {
  return (
    <header className="header">
      <span className="header__avatar">
        <img className="header__profile" src={avatar} alt="avatar profile" />
      </span>
      <h1 className="header__title">Voici un échantillon des <strong className="strong">projets</strong> que j'ai crée ou auxquels j'ai participé<br/> en tant que développeur full stack orienté javascript.</h1>
      <ul className="header__socials">
        <li className="header__social-item"><a href="#" className="header__social-link fa fa-free-code-camp"></a></li>
        <li className="header__social-item"><a href="#" className="header__social-link fa fa-github"></a></li>
      </ul>
    </header>
  )
}

export default Header
