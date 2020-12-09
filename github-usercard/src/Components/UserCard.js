import React from 'react'

const UserCard = (props) => {
    return(
        <div className='usercard'>
            <img src={props.data.avatar_url} alt={props.data.name}/>
            <div className="cardtext">
                <h2>{props.data.name}</h2>
                <h3>{props.data.login}</h3>
                <h3>{props.data.followers}</h3>
                <h3>{props.data.following}</h3>
            </div>         
        </div>
    );
}

export default UserCard;