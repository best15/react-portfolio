

const styles = {

    wrap: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",


    },

};

export default function Home() {
    return (
        <section style={styles.wrap} >

            <h1>Sarad Budhathoki Chhetri</h1>
            <h3>Software / Full-stack web developer</h3>
            <h3>Perth based</h3>

        </section>
    );
}
