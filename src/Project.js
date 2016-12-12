import React, { Component } from 'react'
import cx from 'classnames'

// css
import './project.css'

class Project extends Component {

  render() {

    const codeLinkDisabled = cx(
      'project__demolink',
      {
        'project__demolink--disabled': !this.props.demo
      }
    );

    return (
      <section className="project">
          <h3 className="project__title">{this.props.title}</h3>
          <ul className="project__frameworks">
            { this.props.frameworks && this.props.frameworks
              .map( framework => <li className="project__framework"><img className="project__logo" src={require(`./${framework}.svg`)} alt={`logo ${framework}`}/></li> )
              .concat(<li className="project__framework"><img className="project__logo" src={require(`./javascript.svg`)} alt={`logo javascript`} /></li>)}
          </ul>
          <ul className="project__tags">
            { this.props.tags && this.props.tags.map( tag => <li className="project__tag">{tag}</li> ) }
          </ul>
          <ul className="project__links">
            <a className={codeLinkDisabled} href={this.props.demo} target="_blank" alt="demo link">demo</a>
            <a className="project__codelink" href={this.props.code} target="_blank" alt="code link">code</a>
          </ul>
      </section>
    )
  }
}

export default Project;
