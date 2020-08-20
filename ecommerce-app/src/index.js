import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
// can be used for other platform like React native, etc.
// this one is specifically for React 
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const App = () => {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
