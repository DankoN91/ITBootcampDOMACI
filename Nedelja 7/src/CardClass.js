import React from 'react'
import DescriptionClass from './DescriptionClass'
import EmojiClass from './EmojiClass'

class CardClass extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                <DescriptionClass naziv={this.props.naziv}></DescriptionClass>
                <EmojiClass url={this.props.url}></EmojiClass>
            </div>)
    }
    
}


export default CardClass;