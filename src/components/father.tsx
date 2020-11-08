import * as React from 'react'

import Child from './child'
import { type } from 'os';

type StateType = {
    count?: Number,
    n?: Number,
    data?:Object
}
interface Father {
    state:StateType
}
class Father extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            count: 0,
            n: 1,
            data:new Date()
        }
    }
    //点击事件并传值
    private testClick = (n: Number) => {
        this.setState({
            count:n
       })
    }
    render(){
        return(
            <div>
                <div onClick={() => this.testClick(2)}>父组件,计数{this.state.count}</div>
                <Child></Child>
            </div>
           
        )   
    }
}

export default Father;