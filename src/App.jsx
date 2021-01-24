import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Routes from './helpers/router';
import { store } from './helpers/store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar />
                <Routes />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
