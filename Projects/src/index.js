import React from 'react'; 
import ReactDOM from 'react-dom'; 
// using global SASS files 
import '../Shared/main.scss';
//import Home from './components/Home/home';
import Home from './Portfolio/components/Home/home';

  const App = () => {
  
      return(
          <Home />
      )
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

