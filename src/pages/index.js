import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Header from './header';

// Pages
import Home from './home';
import NotFound from './notFound.js';

const history = createBrowserHistory();

const Pages = () => {
    return(
        <Router history={history}>
            <Header />
            <Switch>
                <Route path="/" exact render={props =>
                    <Home {...props}/>
                }/>
                <Route path="*" render={props => 
                    <NotFound {...props} />
                }/>
            </Switch>
        </Router>
    )
}

export default Pages;