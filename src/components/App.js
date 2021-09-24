import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {


  const [darkModeToggleOn, setDarkModeToggleOn] = useState(false);
  const appClass = darkModeToggleOn ? "App dark" : "App light"
  //console.log(appClass);

  function handleDarkModeToggle () {

      //console.log(darkModeToggleOn)
      setDarkModeToggleOn((darkModeToggleOn) => !darkModeToggleOn)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
