import React from 'react';

// this theme component is a separate component that we want to 
//  use to toggle between different theme
//const ThemeContext = React.createContext('light');
const ThemeContext = React.createContext(["light", () => {}]);

// NOTE: to use this context that is available to all React components,
//  we need to use a Provider. Every context object comes with a Provider
//  React component that allows consuming components to subscribe to 
//  context changes.

export default ThemeContext; 