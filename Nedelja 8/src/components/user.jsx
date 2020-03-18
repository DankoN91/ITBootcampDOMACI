import React from 'react';

const User = (props) => {
    let {user} = props

    return(
        <div className = 'user-div'>
            <p className = 'username'>{user.name}</p>
            <p className = 'number'>{user.number}</p>
        </div>
    )

}

export default User