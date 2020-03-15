import React from 'react'
import DescriptionFunc from './DescriptionFunc'
import EmojiFunc from './EmojiFunc'

const CardFunc = (props) => {
    
    return (
        <div>
            <DescriptionFunc naziv={props.naziv}></DescriptionFunc>
            <EmojiFunc url={props.url}></EmojiFunc>
        </div>)
}


export default CardFunc;