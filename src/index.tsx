import * as React from 'react' 
import * as ReactDOM from 'react-dom'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import  './index.scss'
// import Father from './components/father'
// import Demo1 from './page/demo1'
import Router from './common/Router';
const render = ()=> {
    ReactDOM.render(
        <Router/>,
        document.querySelector('#app')
    )
}
render()