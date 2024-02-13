import React from "react";
import UserItems from "./UserItems";
import Card from "../../shared/UI elements/Card";
import "./UsersList.css";

const UserList = props => {
    if(props.items.length === 0){
        return(
            <div className="">
                <Card>
                    <h2>No Users Found...</h2>
                </Card>
        </div>
        ); 
    }

    return <ul>
        {props.items.map(user => 
             <UserItems 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places}
            />
        )}
    </ul>
}
export default UserList;
