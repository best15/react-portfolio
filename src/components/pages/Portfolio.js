import React from 'react';
import Project from "../Project";
import techBlogImage from "../../assets/images/tech-blog-dashboard.jpg"
import iCanHelpImage from "../../assets/images/i-can-help.jpg"
import weatherForecastImage from "../../assets/images/weather-forecast.jpg"
import dayPlanerImage from "../../assets/images/day-planner.jpg"
import codequizImage from "../../assets/images/codequiz.jpg"


function Portfolio() {

    const projectValues = [
        {
            deployLink: 'https://dudley-mountie-64122.herokuapp.com/',
            projectImage: techBlogImage
        },
        {
            deployLink: 'https://dudley-mountie-64122.herokuapp.com/',
            projectImage: iCanHelpImage
        },
        {
            deployLink: 'https://dudley-mountie-64122.herokuapp.com/',
            projectImage: weatherForecastImage
        },
        {
            deployLink: 'https://dudley-mountie-64122.herokuapp.com/',
            projectImage: codequizImage
        },
        {
            deployLink: 'https://dudley-mountie-64122.herokuapp.com/',
            projectImage: dayPlanerImage
        },
    ]

    const projectMap = projectValues.map(el => <Project deployLink={el.deployLink} projectImage={el.projectImage} />)



    return (
        <section  >

            <article id="MyWorkContainer">

                <h1>My Projects </h1>

                <section className="projects row">
                    {projectMap}
                </section>
            </article>
        </section>

    );
}

export default Portfolio;
