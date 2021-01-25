import React, { useState } from 'react';
import loader from './ajax-loader.gif';
import { Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

interface MainProps { }

function Main({ }: MainProps) {
    // Create the count state.
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Your at the home page rn</h2>
            <Link to="/about">Go to about</Link>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>Your at the about page rn</h2>
            <Link to="/">Go to home</Link>
        </div>
    );
}


export default Main;
