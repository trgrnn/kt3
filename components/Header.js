import React from 'react';
import '../App.css';


const Header = () => {
    const scrollToFooter = () => {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header style={{ padding: '20px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
            <h1>Product List</h1>
            <button onClick={scrollToFooter} style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                Scroll to Footer
            </button>
        </header>
    );
};

export default Header;
