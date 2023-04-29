import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import CoffeeInfo from "./pages/CoffeeInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { useDispatch } from "react-redux";
import { fillStock } from "./actions/coffeeActions";

function App() {
  const dispatch = useDispatch();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then(resp => resp.json())
      .then(data => setDrinks(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (drinks.length > 0) {
      dispatch(fillStock(drinks));
    }
  }, [drinks])

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="info" element={<CoffeeInfo />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
