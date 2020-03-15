import React from 'react'

class DescriptionClass extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return (
        <div>
            <h1>{this.props.naziv}</h1>
            
        </div>)
        }
    
}


export default DescriptionClass;