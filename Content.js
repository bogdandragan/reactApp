import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>Update</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}