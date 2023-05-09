import { useState, useEffect } from "react";
import FilterCards from "../items/FilterCards";
import Cards from "../items/Cards";

function HomePage() {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")


    useEffect(() => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50")
            .then((response) => response.json())
            .then((character) => setData(character))
            .catch((err) => console.error(err))
        },[])


    function handleChangeSearchValue(e) {
        setSearchValue(e.target.value)
    }
        

    return (
        <div className="home-page">
            <div className="container-home-page">
                <FilterCards onInputChange={handleChangeSearchValue} />
                <Cards data={data.filter((e) => e.character.toLowerCase().includes(searchValue.toLowerCase()))} name={data.character} img={data.image} />
            </div>
        </div>
    )
}


export default HomePage;