import * as React from 'react'

import Demo from '../../components/demo1'


class Test extends React.Component {

    private testClick =()=>{
        alert('点击了')
    }
    render(){
        return(
            <div>
                <div  onClick ={this.testClick}>test</div>
                <Demo></Demo>
            </div>
           
        )   
    }
}

export default Test;