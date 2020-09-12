import React, { useState } from 'react';
// import theme context 
import ThemeContext from './ThemeContext';
import Header from './Header';
import Main from './MainWithFunction';

const App = () => {
    
  //  const theme = "light";
    const themeHook = useState("light");

    return(
                    /* we give it a prop called value which contain the data we 
                        want to make available to component tree. */
        <ThemeContext.Provider value={themeHook}>
            <div>
                <Header />
                <Main />
            </div>
        </ThemeContext.Provider> 
    )
}

export default App; 