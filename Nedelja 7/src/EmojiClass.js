import React from 'react'

class EmojiClass extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return (
        <div>
            <img src={this.props.url}></img>
            
        </div>)}
    
}


export default EmojiClass;