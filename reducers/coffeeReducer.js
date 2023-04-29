import { coffeeStore } from "../store/coffeeStore";

const coffeeReducer = (state = coffeeStore, action) => {
    switch (action.type) {
        case "ORDER_COFFEE":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "FILL_STOCK":
            return {
                ...state,
                drinks: [...action.payload]
            }
        default:
            return state
    }
}

export default coffeeReducer;