import React from 'react';


// const styles = {
//   navbar: {
//     paddingTop: "20px",
//     fontSize: "20px",
//   },
//   anchor: {
//     color: "white"
//   }
// }

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav >
      <ul >
        <li className="me-3">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}

            className={currentPage === 'Home' ? 'active text-info' : ''}
          >
            Home
          </a>
        </li>
        <li className=" me-3">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}

            className={currentPage === 'About' ? ' active text-info' : ''}
          >
            About
          </a>
        </li>
        <li className="me-3">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? ' active text-info' : ''}
          >
            Projects
          </a>
        </li>
        <li className="me-3">
          <a
            href="#contact"

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? ' active text-info' : ''}
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
