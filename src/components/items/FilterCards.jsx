function FilterCards({ onInputChange }) {
    return (

        <div className="filter-cards">
            <input type="text" className="input-filter-cards" placeholder="Find a character by name"
            onChange={onInputChange} />
        </div>

    )
    
}


export default FilterCards;