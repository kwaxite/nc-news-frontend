import "./UsersList.css"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllUsers } from "../../Api";


export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchAllUsers().then((usersFromApi) => {
            setUsers(usersFromApi);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            
            <div className="user-list-header">Users</div>



            <ul className="users-list">
                <div className="container">
                    {users.map((user, index) => {
                        return (
                            <div className="user-card" key={index}>
                                <h3> Name: {user.name}</h3>
                                <img className="user-image" src={user.avatar_url} />
                                
                                <p> Username: {user.username}</p>
                            </div>
                        );
                    })}
                </div>
            </ul>

        </>
    )
}