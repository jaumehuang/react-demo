import * as React from 'react' 
import * as ReactDOM from 'react-dom'

import  './index.scss'
import Test  from './components/test/index'
const render = ()=> {
    ReactDOM.render(
        <Test />,
        document.querySelector('#app')
    )
}
render()