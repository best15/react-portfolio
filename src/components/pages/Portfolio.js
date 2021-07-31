import React from 'react';
import Project from "../Project";
import techBlogImage from "../../assets/images/tech-blog-dashboard.jpg"
import iCanHelpImage from "../../assets/images/i-can-help.jpg"
import weatherForecastImage from "../../assets/images/weather-forecast.jpg"
import dayPlanerImage from "../../assets/images/day-planner.jpg"
import codequizImage from "../../assets/images/codequiz.jpg"
import workoutTrackerImage from "../../assets/images/workout-tracker.jpg"


function Portfolio() {

    const projectValues = [
        {
            deployLink: 'https://dudley-mountie-64122.herokuapp.com/',
            projectImage: techBlogImage,
            title: "Tech Blog",
            repoLink: "https://github.com/best15/tech-blog"
        },
        {
            deployLink: 'https://i-can-help-work-market-place.herokuapp.com/',
            projectImage: iCanHelpImage,
            title: "I_CAN_HELP",
            repoLink: "https://github.com/Twistedmouse/I-CAN-HELP-WorkMarketPlace"
        },
        {
            deployLink: 'https://workout-tracker-app-21.herokuapp.com/',
            projectImage: workoutTrackerImage,
            title: "Workout Tracker",
            repoLink: "https://github.com/best15/workout-tracker"
        },
        {
            deployLink: 'https://best15.github.io/weather-forecast/',
            projectImage: weatherForecastImage,
            title: "Weather Forecast",
            repoLink: "https://github.com/best15/weather-forecast"
        },
        {
            deployLink: 'https://best15.github.io/codequiz/',
            projectImage: codequizImage,
            title: "Code Quiz",
            repoLink: "https://github.com/best15/codequiz"
        },
        {
            deployLink: 'https://best15.github.io/day-planner/',
            projectImage: dayPlanerImage,
            title: "Day Planner",
            repoLink: "https://github.com/best15/day-planner"
        },
    ]

    const projectMap = projectValues.map(el =>
        <Project key={el.title} deployLink={el.deployLink} projectImage={el.projectImage} title={el.title} />
    );



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
