import React from 'react';
import { useState } from 'react';

function SearchBar(props) {
    const { products, setProducts, jsonData } = props;
    const [isAvailable, updateProducts] = useState(false);
    const availableProducts = products.filter((product) => product.inStock);


    const filterResults = (event) => {
        const userSearch = event.target.value.toLowerCase(); 
        const selectedArray = isAvailable ? availableProducts : jsonData;
    
        const productFilter = selectedArray.filter((item) => {
          const itemName = item.name.toLowerCase(); 
          return itemName.startsWith(userSearch); 
        });
        setProducts(productFilter);
    };

    const filterAvailable = (event) => {
        if (event.target.checked) {
          updateProducts(false);
          setProducts(availableProducts);
        } else {
          updateProducts(true);
          setProducts(jsonData);
        }
      };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" onChange={filterResults}></input>
      <br />
      <div>
      <input type="checkbox" id="inStock" name="isInStock" onChange={filterAvailable}/>
                <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
