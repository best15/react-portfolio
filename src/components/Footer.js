import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume from "../assets/doc/Sarad_Resume.pdf"

export default function Footer() {
    return (

        <footer>
            <section className="contactlinks">
                <ul>


                    <li>
                        <a href="https://github.com/best15" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sarad-budhathoki-chhetri-8b23b996/" target="_blank"><FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>

                    <li>
                        <a href={resume} target="_blank">Resume</a>
                    </li>
                </ul>
            </section>

        </footer>

    );
}

