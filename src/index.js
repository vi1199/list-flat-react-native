import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from './config/routes';
import configureStore from './store/configureStore';

class App extends Component{
    render(){
        return (
            <Provider store= {configureStore}>
                <Root/>
            </Provider>
        )
    }
}

export default App;