import React from 'react';
import {BrowserRouter as Router, Switch , Route, Link,HashRouter } from 'react-router-dom';
import Home from '../page/home';
import Detail from '../page/detail';


const BasicRoute = () => (
    <HashRouter >
        <div>
            <Link to="/home">page1</Link>
            <Link to="/detail">page1</Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/detail" component={Detail}/>
            </Switch>
       </div>
    </HashRouter>
);


export default BasicRoute;