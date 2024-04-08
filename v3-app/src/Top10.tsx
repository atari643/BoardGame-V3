import React, { useEffect, useState } from 'react';
import './Top10.css';
import usersData from './user.json';

interface User {
    id: number;
    login: string;
    nbVictoires: number;
    nbDefaites: number;
}
const Top10 = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [limit, setLimit] = useState<number>(10); 

    useEffect(() => {
        const sortedUsers = usersData.users
            .sort((a: User, b: User) => b.nbVictoires - a.nbVictoires)
            .slice(0, limit); 
        setUsers(sortedUsers);
    }, [limit]); 

    return (
        <div className="Top10">
            <h1>Top 10</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User, index: number) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.login}</td>
                            <td>{user.nbVictoires}</td>
                            <td>{user.nbDefaites}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Top10;