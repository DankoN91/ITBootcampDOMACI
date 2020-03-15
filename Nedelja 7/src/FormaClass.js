import React from 'react'

class FormaClass extends React.Component {
    constructor (props) {
        super (props);
    }
     render () {

        return (
            <div>
                <button>{this.props.text}</button>
                <input></input>
                </div>
        );
     }
}


export default FormaClass;
     