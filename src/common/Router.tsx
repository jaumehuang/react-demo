import React from 'react';
import {BrowserRouter as Router, Switch , Route, Link,HashRouter } from 'react-router-dom';
import Home from '../page/home';
import Detail from '../page/detail';


const BasicRoute = () => (
    <HashRouter >
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/detail/:id' component={Detail}/>
            </Switch>
       </div>
    </HashRouter>
);


export default BasicRoute;