import React from 'react';
import SingleEmployee from './SingleEmployee';

export default class EmployeeList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let listaZaposlenih=this.props.zaposleniData;

        return(
        <div>
            {listaZaposlenih.map(zaposleni => {
                return (
                    <> 
                    <SingleEmployee podaciZaposlenog={zaposleni}></SingleEmployee>
                    <hr></hr>
                    </>
            )})}
        </div>);
    }
}