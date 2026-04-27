import { useState, useEffect } from "react";

function RandomUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //This function handles the actual fetching
    const fetchUser = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUser(data.results[0]); //The API returns an array
            setLoading(false);
        }
        catch (error) {
            console.error("Fetch error", error);
        }
        finally {
            setLoading(false);
        }
    };

    //useEffect runs when the component first appears (mounts)
    useEffect(() => {
        (async () => {
            await fetchUser();
        })();
    }, []);// Empty array means "only run once"

    if (loading) return <h2>Loading User....</h2>;

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
            <img src={user.picture.large} alt="user" />
            <h1>{user.name.first} {user.name.last}</h1>
            <p>Email: {user.email}</p>
            <button onClick={fetchUser}>Get New User</button>
        </div>
    );
}

export default RandomUser