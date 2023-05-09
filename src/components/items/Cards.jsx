import SimpsonCard from "./SimpsonCard";

function Cards({ data, name, img }) {
    return (
        <ul className="cards">
            {
                data.map((e) => {
                    return (
                        <SimpsonCard key={e.name} name={e.character} img={e.image} />
                    )
                })
            }
        </ul>

    )
}

export default Cards;