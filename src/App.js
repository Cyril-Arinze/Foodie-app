import React, { useState } from 'react';


import PageSummary from './Components/Header/PageSummary';
import SideBar from './Components/Sidebar/SideBar';
import classes from "./App.css"
import MealsSection from './Components/Meals/MealsSection';
import CartButton from './Components/Cart/CartButton';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
function App() {

  const [cartIsOpen, setCartIsOpen] = useState(false) //Cart open useState

  const cart = cartIsOpen && <Cart /> // renders cart component only when cartIsOpen is true 

  return (
    <CartProvider setCartIsOpen={setCartIsOpen}>
      <SideBar />
      <CartButton />
      {cart}
      <main className={classes.main}>

        <PageSummary />
        <MealsSection />

      </main>
    </CartProvider>

  );
}

export default App;
