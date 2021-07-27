import React from 'react';
const styles = {
  navbar: {
    paddingTop: "20px",
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar}>
      <ul className="nav nav-tabs float-end">
        <li className="nav-item me-3">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item  me-3">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item  me-3">
          <a
            href="#blog"
            onClick={() => handlePageChange('Blog')}

            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </a>
        </li>
        <li className="nav-item  me-3">
          <a
            href="#contact"

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
