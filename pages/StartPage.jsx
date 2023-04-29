import { useSelector } from "react-redux";
import CoffeeCard from "../Components/CoffeeCard";
import { useEffect, useState } from "react";

function StartPage() {
    const [drinks, setDrinks] = useState([]);
    const [drinksFromStore, setDrinksFromStore] = useState([]);
    const state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        setDrinks(state.drinks);
        setDrinksFromStore(state.drinks);
    }, [state]);

    function handleSearchInput(input) {
        setDrinks(drinksFromStore);
        let drinksCopy = [...drinksFromStore];
        let filteredDrinks = drinksCopy.filter((coffee) => coffee.title.includes(input));
        setDrinks(filteredDrinks);
    };

    return ( 
        <main>
            <p>STARTPAGE</p>
            <label>SÖK </label>
            <input onChange={(e) => handleSearchInput(e.target.value)}></input>
            {
                state.drinks &&
                state.drinks.map((coffee) => <CoffeeCard key={coffee.id} coffee={coffee} />)
            }
        </main>
     );
}

export default StartPage;