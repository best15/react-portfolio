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
                        Hi, I am Sarad. I am certified Full-Stack Web Develoiper from UWA.
                        I have some past experience as a software developer and have a bachelor degree in computer engineering.

                    </p>
                </div>

            </article>
        </section>
    );
}


