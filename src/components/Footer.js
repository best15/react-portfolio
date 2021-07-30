import React from 'react';

const styles = {

    footer: {
        // marginTop: "15px",
        padding: "30px",
        textAlign: "center",
        color: "white",
        // background: "linear-gradient(rgba(7, 38, 113, 0.9), rgba(177, 150, 200, 0.9))",
    }
}
export default function Footer() {
    return (
        <footer style={styles.footer}>
            <li>
                <a href="https://github.com/best15" target="_blank"><i class="fab fa-github"></i>  Github </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/sarad-budhathoki-chhetri-8b23b996/" target="_blank"> <i class="fab fa-linkedin"></i> Linkedin</a>
            </li>
            <li>
                <a href="https://www.gmail.com" target="_blank"> <i class="fas fa-envelope-square"></i> lochan.sharad@gmail.com </a>
            </li>
        </footer>
    );
}

