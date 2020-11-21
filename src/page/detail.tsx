import React from 'react';


export default class Home extends React.Component<any> {
    componentDidMount() {
      console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
               <button onClick={() => this.props.history.goBack()}>回到home</button>
            </div>
        )
    }
}