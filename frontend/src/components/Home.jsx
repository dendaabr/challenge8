import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../lib/axios";

export default function Home({ refresh }) {
    const [players, setPlayers] = useState([]);
    const loadPlayers = () => {
        axios
            .get("/api/v1/players")
            .then((data) => {
                alert('success')
                setPlayers([]);
                setPlayers(data.data.data);
            })
            .catch(() => {
                alert("Please Check Again")
            });
    };
    useEffect(() => {
        loadPlayers();
    }, [refresh]);

    return (
        <div className="container mt-5 ">

            <div>
                <ul>
                    <li><NavLink to={"/player/create"}>Create Player</NavLink></li>
                    <li><NavLink to={"/docs"}>Swagger</NavLink></li>
                </ul>
                <h1>Table Player</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Exp</th>
                            <th>Level</th>
                            <th>Create</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players &&
                            players.map((players, key) => (
                                <tr key={key}>
                                    <td>{players.id}</td>
                                    <td>{players.username}</td>
                                    <td>{players.email}</td>
                                    <td>{players.password}</td>
                                    <td>{players.experience}</td>
                                    <td>{players.lvl}</td>
                                    <td>{players.create}</td>
                                    <td>{players.update}</td>
                                    <td>{players.delete}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}