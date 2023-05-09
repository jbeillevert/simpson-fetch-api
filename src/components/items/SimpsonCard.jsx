import { NavLink } from "react-router-dom";


function SimpsonCard({ name, img }) {

    const navname = name.replace(' ', '-').toLowerCase();

    return (
        <li className="simpson-card">
                <h3 className="h3-simpson-card">{name}</h3>
                <img className="img-simpson-card" src={img} />
        </li>
    )
}

export default SimpsonCard;