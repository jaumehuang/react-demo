import * as React from "react"
import Father from "../components/father"
class Demo1 extends React.Component<any>{
    render(){
        return(
            <div>
                <div><span>demo1：</span> <button onClick={() => this.props.history.goBack()}>回到home</button> </div>
                <div>组件引用：</div>
                <Father></Father>
            </div>
        )
    }
}

export default Demo1;