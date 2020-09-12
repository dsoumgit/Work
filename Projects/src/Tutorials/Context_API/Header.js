import React from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggler from './ThemeToggler';

const headerStyles = {
    padding: "1em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const Header = () => {

    return(
        <header style={headerStyles}>
            <h1>Context API</h1>
            <ThemeToggler />
        </header>
    )
}

export default Header;