import React from 'react';

// import '../styles/Navbar.css';

const styles = {
  styleA: {

    color: "white",


  },
  styleNbar: {
    background: "green",
    textAlign: "right",
  }
}

function Navbar() {

  return (
    <nav className="navbar" style={styles.styleNbar}>
      <a style={styles.styleA} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
