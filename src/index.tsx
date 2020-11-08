import * as React from 'react' 
import * as ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import  './index.scss'
import Father  from './components/father'
const render = ()=> {
    ReactDOM.render(
        <Router>
            <Route path="/" exact component={Father}></Route>
        </Router>,
        document.querySelector('#app')
    )
}
render()