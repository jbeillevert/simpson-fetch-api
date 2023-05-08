import FilterCards from "../items/FilterCards";
import Cards from "../items/Cards";

function HomePage() {
    return (
        <div className="home-page">
            <FilterCards />
            <Cards />
        </div>
    )
}


export default HomePage;