import { useState, useEffect } from "react";

function HookEx() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);   // log here
                setUsers(data);
            });
    }, []);

    console.log(users); // this is fine

    return (
        <>
            <div className="text-left p-8">
                <h2>Users List</h2>
                {users.map(user =>
                    <p key={user.id} className="text-blue-500">{user.name}</p>)}
            </div>
        </>
    );
}

export default HookEx;