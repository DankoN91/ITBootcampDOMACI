import React from 'react';

export default class Message extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        let podaciPoruke=this.props.podaciPoruke;
        return(
        <div>
            <h1>{podaciPoruke.title}</h1><p>{podaciPoruke.by}</p>
        </div>)
    }
}
