import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Routes from './helpers/router';
import { store } from './helpers/store';
import mainTheme from './pages/Theme';

const App = () => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={mainTheme}>
                <BrowserRouter>
                    <NavBar />
                    <Routes />
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
};

export default App;
