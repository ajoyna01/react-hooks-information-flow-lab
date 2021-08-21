import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
 

  return (
    <div >
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
