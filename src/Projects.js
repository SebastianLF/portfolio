import React, { PropTypes } from 'react'
import Project from './Project'

// css
import './projects.css'

class ProjectsList extends React.Component {

  render () {
    return (
      <section id="main">
        <section className="thumbnails">
          { this.props.list && this.props.list.map( (p) => <Project {...p} /> ) }
        </section>
      </section>
    )
  }
}

export default ProjectsList;
