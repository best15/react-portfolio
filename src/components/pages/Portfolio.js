import React from 'react';
import techBlogImage from "../../assets/images/tech-blog-dashboard.jpg"
import "../../assets/css/Portfolio.css"

function Section() {

    return (
        <section className="projects">
            <div className="row">
                <div className="card col-sm-12 col-md-4 col-lg-2">
                    <div >
                        <a href=" https://dudley-mountie-64122.herokuapp.com/" target="_blank">
                            <img id="work1screenshot"
                                src={techBlogImage} alt="tech blog application " className="imageContainer" />
                        </a>
                    </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-2">
                    <div >
                        <a href=" https://dudley-mountie-64122.herokuapp.com/" target="_blank">
                            <img id="work1screenshot"
                                src={techBlogImage} alt="tech blog application " className="imageContainer" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
