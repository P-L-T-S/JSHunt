import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Main from "./pages/Main/Main";
import Product from "./pages/Products/Products"

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/products/:id" component={Product}/>
        </Switch>
    </Router>
);
export default Routes;