import React from 'react';
import User from './user';



const UserList = (props) => {
    let {users} = props; 
    return(
        <div>
            {users.map(user => {return <User user = {user} key = {user.number} />})}
        </div>
    )
}

export default UserList;