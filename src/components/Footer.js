import React from 'react';

const styles = {

    footer: {
        marginTop: "15px",
        padding: "30px",
        textAlign: "center",
        color: "white",
        background: "linear-gradient(rgba(7, 38, 113, 0.9), rgba(177, 150, 200, 0.9))",
    }
}
export default function Footer() {
    return (
        <footer style={styles.footer}>
            <h2>&copy; Copyright Sarad </h2>
        </footer>
    );
}

