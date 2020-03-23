import React from 'react';

export default class SingleEmployee extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let podaciZaposlenog=this.props.podaciZaposlenog;
        return(
        <div>
            <h1>{podaciZaposlenog['employee_name']}</h1>
            <p>Godine: {podaciZaposlenog['employee_age'] + ', plata:' + podaciZaposlenog['employee_salary']}</p>
        </div>)
    }
}
