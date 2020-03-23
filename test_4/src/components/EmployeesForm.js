import React from 'react';
import EmployeeList from './EmployeeList';
import { getEmployeesData, postEmployeesData } from '../Services/EmployeesService';

export default class EmployeesForm extends React.Component{
    constructor(props){
        super(props);

        this.state={'zaposleni':[],
                    'employeesPerPage':5,
                    'filtriraniZaposleni':[],
                    'currentPage':1,
                    'inputIme':'',
                    'inputGodine':'',
                    'inputPlata':''
                    };
    }

    componentDidMount(){
        this.setEmployees();
    }

    setEmployees = async()=>{
        let sviZaposleniSaServera = await getEmployeesData();
        this.setState({'zaposleni':sviZaposleniSaServera});
        this.setState({'filtriraniZaposleni':sviZaposleniSaServera});
        let employeesPerPage = this.state['employeesPerPage'];
        this.applyFilter(employeesPerPage);
    }

    handleFilterChange(e){
        this.setState({'employeesPerPage':e.target.value});
        this.applyFilter(parseInt(e.target.value));
    }

    applyFilter(employeesPerPage){
        let sviZaposleni = this.state['zaposleni']
        let currentPage = this.state['currentPage'];
        let indexPrvog = (currentPage - 1) * employeesPerPage;
        let filtriraniZaposleni = [];
        for (let i = indexPrvog; i < indexPrvog+employeesPerPage && i < sviZaposleni.length;i++){
            filtriraniZaposleni.push(sviZaposleni[i]);
        };
        this.setState({'filtriraniZaposleni':filtriraniZaposleni});
        
        
    }

    render(){
        return(
        <div>
            <select onChange={(e)=>{this.handleFilterChange(e)}}>
                <option>5</option>
                <option>10</option>
                <option>25</option>
            </select>
            <EmployeeList zaposleniData={this.state['filtriraniZaposleni']}></EmployeeList>
            <p>Unos novog radnika:</p>
            <input onChange={(e)=>{this.setState({'inputIme':e.target.value})}} type="text" placeholder="Ime"></input>
            <input onChange={(e)=>{this.setState({'inputGodine':e.target.value})}} type="text" placeholder="Godine"></input>
            <input onChange={(e)=>{this.setState({'inputPlata':e.target.value})}} type="text" placeholder="Plata"></input>
            <button onClick={()=>{postEmployeesData(this.state['inputIme'],this.state['inputGodine'],this.state['inputPlata'])}}>DODAJ</button>
            
        </div>)
    }
}
