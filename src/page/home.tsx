import React from 'react';


export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
            <button onClick={() => this.props.history.push('/detail/'+'22')}>去detail</button>
            <button onClick={() => this.props.history.push('/home/demo1')}>去demo1</button>
            </div>
        )
    }
}