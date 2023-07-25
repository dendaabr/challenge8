import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "../lib/axios";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/esm/Container";

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
        <Container fluid>

            <div>
                <h1>Table Player</h1>
                <Navbar expand="md" className="bg-body-tertiary">
                    <Container fluid>
                        <Nav
                            className="me-auto"
                            style={{ text: 'text-decoration-none' }}
                        >
                            <Button variant="outline-success"><NavLink to={"/player/create"}>Add New Player</NavLink></Button>
                            <Button variant="outline-success"><NavLink to={"/docs"}>Swagger</NavLink></Button>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
                <br></br>
                <table className="table table-bordered">
                    <thead striped bordered hover>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Exp</th>
                            <th>Level</th>
                            <th>CreateAt</th>
                            <th>UpdateAt</th>

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
                                    <td>{players.createAt}</td>
                                    <td>{players.updateAt}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Container >
    );
}