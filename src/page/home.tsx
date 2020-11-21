import React from 'react';


export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>
                  <span>同级路由：</span>
                  <button onClick={() => this.props.history.push('/detail/' + '22')}>去detail</button>
                </div>
                <div>
                    <span> 嵌套路由：</span> 
                    <button onClick={() => this.props.history.push('/home/demo1')}>去demo1</button>
                </div>
            </div>
        )
    }
}