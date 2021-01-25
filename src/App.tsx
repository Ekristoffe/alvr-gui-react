import React, { useState } from 'react';
import './App.css';
import loader from './ajax-loader.gif';
import { Button } from '@material-ui/core';
import Main from './Main';

interface AppProps { }

function App({ }: AppProps) {
    // TODO: Make the loading state false by default and actually load data.
    const [loaded, setLoading] = useState(true);
    if (!loaded)
        return (
            <div className="App">
                <img src={loader} />
                <p>Loading...</p>
            </div>
        );
    else return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
