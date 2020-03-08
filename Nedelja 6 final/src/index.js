import LaunchList from "./components/launch_list";
import Filter from "./components/filters";


const app=document.querySelector('#app');



const filters=Filter();
const launch_list=LaunchList();


app.append(filters,launch_list);