import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const themeTogglerStyle = {
    cusor: "pointer"
}

const ThemeToggler = () => {
    
    const [ themeMode, setThemeMode ] = useContext(ThemeContext);
    return(
        <div style={themeTogglerStyle} 
            onClick={() => { setThemeMode(themeMode === 'light' ? 'dark': 'light')}}>
                <span title="switch theme">
                    {themeMode === 'light' ? 'light' : 'dark'}
                </span>
        </div>
    )
}

export default ThemeToggler;