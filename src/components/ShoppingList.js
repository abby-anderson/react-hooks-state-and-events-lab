import React, { useState } from "react";
import { render } from "react-dom";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  function handleCategorySelection (e) {
    console.log(e.target.value);
    //prob going to take the value of the new selection, use that to update the selectedCategory state
    //and then make a new array via array.filter to render only the items whose category equals the selectedCategory state
    setSelectedCategory(e.target.value);
  }
  console.log('selected category', selectedCategory);
  

  const listDisplay = items.filter((each) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return each.category === selectedCategory;
    }
  })
  console.log(listDisplay)

  const renderList = listDisplay.map((item) => <Item key={item.id} name={item.name} category={item.category} />)

  console.log(renderList);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategorySelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderList}
      </ul>
    </div>
  );
}

export default ShoppingList;
