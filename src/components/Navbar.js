import React from 'react';
// import "../assets/css/Navbar.css"

const styles = {
  navbar: {
    paddingTop: "20px",
    fontSize: "20px",
  },
  anchor: {
    color: "white"
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar}>
      <ul className="nav  float-end">
        <li className="me-3">
          <a style={styles.anchor}
            href="#home"
            onClick={() => handlePageChange('Home')}

            className={currentPage === 'Home' ? 'nav-link active text-info' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className=" me-3">
          <a style={styles.anchor}
            href="#about"
            onClick={() => handlePageChange('About')}

            className={currentPage === 'About' ? 'nav-link active text-info' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="me-3">
          <a style={styles.anchor}
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active text-info' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="me-3">
          <a style={styles.anchor}
            href="#contact"

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active text-info' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        {/* <li className="me-3">
          <a style={styles.anchor}
            href="#resume"

            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active text-info' : 'nav-link'}
          >
            Resume
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavTabs;
