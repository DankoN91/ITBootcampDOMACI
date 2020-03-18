import React, { useState } from 'react';
import UserInput from './components/user-input';
import UserList from './components/user-list';
import data from './data';



const App = () => {
    let [users, setUsers] = useState(data)

    const addUser = (ime, broj) =>{
        let usersUpdate = [...users]
        usersUpdate.push({name: ime, number: broj})
        setUsers(usersUpdate)
    }

    return(
        <>
        <UserInput addUser = {addUser}/>
        <UserList users = {users}/>
        </>
    )
}

export default App;
