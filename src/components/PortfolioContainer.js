import React, { Fragment, useState } from 'react';

import Header from './Header';
import Footer from './Footer';


import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // Checks the value of currentPage and returns a component
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Fragment >

            {/* currentPage(default set to Home) and function handlePageChange is passed as props */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
            <Footer />
        </Fragment>
    );
}
