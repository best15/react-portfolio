import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// const styles = {

//     footer: {
//         // marginTop: "15px",
//         padding: "30px",
//         textAlign: "center",
//         color: "white",
//         // background: "linear-gradient(rgba(7, 38, 113, 0.9), rgba(177, 150, 200, 0.9))",
//     }
// }
export default function Footer() {
    return (

        <footer>
            <section class="contactlinks">
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
                        <a href="../assets/doc/sarad-resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </section>
            {/* <h2>&copy; Copyright Sarad </h2> */}
        </footer>

    );
}

