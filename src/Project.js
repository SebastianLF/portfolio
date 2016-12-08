import React, { Component } from 'react'
import cx from 'classnames'

// css
import './project.css'

class Project extends Component {

  render() {

    const codeLinkDisabled = cx({
      'disabled': !this.props.demo
    });

    return (
      <section className="project">
          <h3>{this.props.title}</h3>
          <ul className="frameworks">
            { this.props.frameworks && this.props.frameworks
              .map( framework => <li><img src={require(`./${framework}.svg`)} alt={`logo ${framework}`} width={framework === 'mongodb' ? '200px !important' : ''}/></li> )
              .concat(<li><img src={require(`./javascript.svg`)} alt={`logo javascript`} /></li>)}
          </ul>
          <ul className="tags">
            { this.props.tags && this.props.tags.map( tag => <li>{tag}</li> ) }
          </ul>
          <ul className="links">
            <a className={codeLinkDisabled} href={this.props.demo} target="_blank" alt="demo link">demo</a>
            <a href={this.props.code} target="_blank" alt="code link">code</a>
          </ul>
      </section>
    )
  }
}

export default Project;
