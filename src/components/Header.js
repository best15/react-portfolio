import React from 'react';


const styles = {
  heading: {
    // background: "red",
  },

  h1style: {

    color: "black",
  },

};

function Header() {

  return (
    <header className="header" style={styles.heading}>
      <h1 style={styles.h1style}>Header</h1>
    </header>
  );
}

export default Header;
