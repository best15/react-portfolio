import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project({ deployLink, projectImage, title }) {

  return (
    <Fragment>
      <div className=" col-sm-12 col-md-6 col-lg-5 mb-3  projectContainer">

        <img id="img" src={projectImage} alt="Application screenshot" />

        <div className="links">
          <a href={deployLink} target="_blank">
            <h2 className="title">{title}</h2>
          </a>
          <a href={deployLink} target="_blank"><FontAwesomeIcon icon={faGithub} /> </a>
        </div>

      </div>
    </Fragment>
  );
}

export default Project;
