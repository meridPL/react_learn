import React, { Component } from 'react';

class ListSklepow extends Component {
    render(){
    return(
        <div>
            <h1>Lista zakupów {this.props.name}</h1>
            <ul>
                <li>a</li>
                <li>s</li>
                <li>d</li>
                <li></li>
                <li></li>
            </ul>
        </div>
        
    )
    }

    testClick(){
        console.log('a');
    }
}
export default ListSklepow;