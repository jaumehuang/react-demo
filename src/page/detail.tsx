import React from 'react';


export default class Home extends React.Component<any> {
    componentDidMount() {
      console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
            <a href='#/'>回到home</a>
            <button onClick={() => this.props.history.goBack()}>回到home</button>
            </div>
        )
    }
}