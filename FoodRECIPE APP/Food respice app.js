

import React, { useState, useEffect } from 'react';
import ProductRecipe from './ProductRecipe';

function FoodRecipeApp() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const apiKey = '6eadc5c69674686612cce3bb66c24aca';
  const apiId = '476f4b33';

  const submitHandler = (e) => {
    e.preventDefault();
    const searchQuery = search;
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=100`; // item anevi 100 times featch ithavi

    fetch(apiUrl)
      .then(response => response.json())      //first we do console the products consoling  soo items display in the browser
      .then(data => {                         //(don't confuse)
        setData(data.hits);    //hit mins=hits property is used to extract the list of recipe items from rsponce is returned by endamam
      })
  }

  return (
    <div>
      <h1>Food Recipe App</h1><br/>
      <form onSubmit={submitHandler}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} /><br/>
        <input type='submit' className='btn btn-primary' value="Search" />
      </form>

      <ProductRecipe data={data} />
    </div>
  );
}

export default FoodRecipeApp;
 