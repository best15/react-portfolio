import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume from "../assets/doc/SARAD-Resume.pdf"

export default function Footer() {
    return (

        <footer>
            <section className="contactlinks">
                <ul>


                    <li>
                        <a href="https://github.com/best15" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sarad-budhathoki-chhetri-8b23b996/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>

                    <li>
                        <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </section>

        </footer>

    );
}

