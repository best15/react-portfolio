import PersonalPic from "../../assets/images/personalpic.jpg"


export default function About() {
    return (
        <section >
            <article id="AboutMeContainer" >

                <h1>About Me</h1>

                <div className="aboutme-card">
                    <figure className="personalpic">
                        <img src={PersonalPic} alt="personal pic" />
                    </figure>
                    <p>
                        Hi, I am Sarad and I am currently studying Full-Stack Web Development at UWA to become a Web Developer.
                        I have some past experience as a software developer and have a bachelor degree in computer engineering.

                    </p>
                </div>

            </article>
        </section>
    );
}


