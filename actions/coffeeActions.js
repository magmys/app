export const orderCoffee = (coffeeType) => ({
    type: "ORDER_COFFEE",
    payload: coffeeType
});

export const fillStock = (drinks) => ({
    type: "FILL_STOCK",
    payload: drinks
});