import React from 'react';
import Message from './Message';

export default class MessagesList extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        let listaPoruka=this.props.porukeData;

        return(
        <div>
            {listaPoruka.map(poruka => {
                return <Message podaciPoruke={poruka}></Message>
            })}
        </div>);
    }
}
