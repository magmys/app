import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CoffeeInfo() {
    const [coffee, setCoffee] = useState();
    const params = useParams();
    const state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        let coffeeMatch = state.drinks.find((c) => c.id == params.id)
        setCoffee(coffeeMatch)
    }, [state])

    return ( 
        <main>
            {coffee &&
            <p>{coffee.title}</p>
        }
        </main>
     );
}

export default CoffeeInfo;