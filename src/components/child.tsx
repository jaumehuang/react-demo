import * as React from "react"
import { array } from "prop-types";

interface childProp{
    datas:Number
}

class Child extends React.Component<childProp>{
    render(){
        return(
            <div>我是子组件,父组件给我传了{this.props.datas}</div>
        )
    }
}

export default Child;