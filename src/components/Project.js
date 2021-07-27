import React from 'react';


const styles = {
  styleSection: {
    background: "orange",
  },
  styleH2: {
    color: "black",
  },
  styleP: {
    color: "black",
    fontSize: "30px",
  }
};
function Section() {

  return (
    <section style={styles.styleSection} className="section">
      <h2 style={styles.styleH2}>Lorem Ipsum Dolor Sit Amet</h2>

    </section>
  );
}

export default Section;
