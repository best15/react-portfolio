import React from 'react';

const styles = {

    wrap: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px",

    },

};

export default function Home() {
    return (
        <section style={styles.wrap} >
            <h1>Sarad Budhathoki Chhetri</h1>
            <h2>Software developer / Full-stack web developer, Perth based.</h2>

        </section>
    );
}
