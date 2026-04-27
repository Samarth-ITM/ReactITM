import { useState, useEffect } from "react";

function HookEx() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            });
    }, []);

    console.log(users);

    return (
        <div className="text-left p-8">
            <h2>Users List</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <p className="text-blue-500">{user.name}</p>
                </div>
            ))}
        </div>
    );
}

export default HookEx;