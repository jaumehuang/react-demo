import * as React from 'react' 
import * as ReactDOM from 'react-dom'


import  './index.scss'

import Router from './common/Router';
const render = ()=> {
    ReactDOM.render(
        <Router/>,
        document.querySelector('#app')
    )
}
render()