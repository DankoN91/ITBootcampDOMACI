import axios from 'axios';

const getTopStoriesID = async () => {
    let response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    console.log('Niz idjeva  '+response.data);
    return response.data;
}

const getMessageByID = async (messageID) => {
    let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${messageID}.json?print=pretty`);
    return response.data;
}

const getTopStories= async()=>{
    let stories =[];

    //nabavi niz svih id-jeva
    let nizIdjeva= await getTopStoriesID();
    //mi smo sacekali sve iznad i imamo pun niz idjeva

    for (let i = 0; i < 10; i++) {
        const storyID = nizIdjeva[i];

        let konkretanElementNaOsnovuIdja= await getMessageByID(storyID);
        stories.push(konkretanElementNaOsnovuIdja);
        
    }
    console.log(stories);
    return stories;
}

export default getTopStories;