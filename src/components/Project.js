import React, { Fragment } from 'react';


function Project({ deploylink, projectImage }) {

  return (
    <Fragment>
      <div className=" col-sm-12 col-md-6 col-lg-5 mb-3  ">

        <a href={deploylink} target="_blank">
          <img id="img" src={projectImage} alt="Fullstack I CAN HELP application " />

        </a>

      </div>
    </Fragment>
  );
}

export default Project;
