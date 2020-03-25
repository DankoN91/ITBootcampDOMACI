import React from 'react';
import MessagesList from './MessagesList';
import getTopStories from '../Services/hackerNewsService';

export default class NewsForm extends React.Component{
    constructor(props){
        super(props);

        this.state={'poruke':[],
                       'filterTekst':'',
                       'automaticUpdate':false,
                       'filtriraneVesti':[]
                    };
    }

    componentDidMount(){
        this.setNews();
    }

    setNews = async()=>{
        let topPriceSaServera = await getTopStories();
        this.setState({'poruke':topPriceSaServera});
        this.setState({'filtriraneVesti':topPriceSaServera});
    }

    handleFilterChange(e){
        this.setState({'filterTekst':e.target.value});
    }

    handleApplyFilter(){
        let trenutniFilterTekst = this.state['filterTekst'];
        let filtriraneVesti = this.state['poruke'].filter((poruka)=>{ return poruka.title.toLowerCase().includes(trenutniFilterTekst.toLowerCase()); })
        this.setState({'filtriraneVesti':filtriraneVesti});
    }

    render(){
        return(
        <div>
            <h3>Filtriraj vesti</h3>
            <input type='text' onChange={(e)=>{this.handleFilterChange(e)}}></input>
            <button onClick={(e)=>{this.handleApplyFilter(e)}}>Primeni filter</button>
            <MessagesList porukeData={this.state['filtriraneVesti']}></MessagesList>
        </div>)
    }
}
