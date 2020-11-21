import * as React from 'react'

import Child from './child'

class Father extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }
    //点击事件并传值
    private testClick =  (n: Number) => {
        alert('点中了')
    }
    render() {
        const num = 123456;
        return(
            <div>
                <div>我是父组件</div>
                <div>
                    点击事件：<button onClick={() => this.testClick(4)}>点我</button>
                </div>
                <Child datas={num}></Child>
            </div>
           
        )   
    }
}

export default Father;