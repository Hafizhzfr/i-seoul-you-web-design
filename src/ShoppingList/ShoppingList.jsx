import { useState } from 'react';

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const [totalPrice, setTotalPrice] = useState('0');

  const handleClick = (event) => {
    const itemInput = event.target.name;
    const priceInput = event.target.value;
    setShoppingList([...shoppingList, {
      itemInput, priceInput
    }]);
    setTotalPrice(parseInt(totalPrice, 10) + parseInt(priceInput, 10));
  };

  console.log('shoppingList :>> ', shoppingList);
  console.log('totalPrice :>> ', totalPrice);

  return (
    <div className="shopping-list-container">
      <h1>Click your desired item</h1>
      <button type="button" name="Apple" value="2" onClick={handleClick}>Apple, $2</button>
      <button type="button" name="Mango" value="3" onClick={handleClick}>Mango, $3</button>
      <button type="button" name="Grape" value="4" onClick={handleClick}>Grape, $4</button>
      <button type="button" name="Melon" value="10" onClick={handleClick}>Melon, $10</button>
      <button type="button" name="Durian" value="15" onClick={handleClick}>Durian, $15</button>
    </div>
  );
};

export default ShoppingList;
