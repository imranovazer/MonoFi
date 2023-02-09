import React from "react"
import '../styles/userCard.scss'
const UserCard = ({name ,role , ava,comment}) =>
{   
    return (<div className="UserCard">
        <div className="ellips">
        </div>
        <div className="ava">
            <img src={ava} alt="" srcset="" />
                </div>
        <div className="userData">
            <span className="name">

                {name}
            </span>
            <span className="role">
                {role}

            </span>
            <span className="comment">
                    {comment}
            </span>
            
        </div>
    </div>)
}
export default UserCard; 