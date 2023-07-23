import { NavLink } from "react-router-dom";

export default function Home() {
    return (<div>
        <ul>
            <li><NavLink to={"/player/create"}>Create Player</NavLink></li>
            <li><NavLink to={"/docs"}>Swagger</NavLink></li>
        </ul>
        <h1>Table</h1>
    </div>)
}