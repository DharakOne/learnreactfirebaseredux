import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import appStore from './store/AppStore'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={appStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
