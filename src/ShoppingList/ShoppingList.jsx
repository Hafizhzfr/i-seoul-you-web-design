import { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.css';

const ShoppingList = () => {
  const [rawList, setRawList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (event) => {
    setIsPressed(true);
    const itemInput = event.target.name;
    const priceInput = event.target.value;
    setRawList([...rawList, {
      itemInput, priceInput
    }]);
    setTotalPrice(totalPrice + parseInt(priceInput, 10));
  };

  // REMOVE DUPLICATES
  const realList = rawList.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === rawList.findIndex((obj) => JSON.stringify(obj) === _value);
  });

  const renderShoppingList = () => {
    if (!isPressed) {
      return <p>your shopping list will appear once you click on item</p>;
    }
    return (
      <ShoppingItem rawList={rawList} realList={realList} totalPrice={totalPrice} />

    );
  };

  return (
    <div className="shopping-list-container">
      <h1>Click your desired item</h1>
      <button className="button-fruit" type="button" name="Apple" value="2" onClick={handleClick}>Apple, $2</button>
      <button className="button-fruit" type="button" name="Mango" value="3" onClick={handleClick}>Mango, $3</button>
      <button className="button-fruit" type="button" name="Grape" value="4" onClick={handleClick}>Grape, $4</button>
      <button className="button-fruit" type="button" name="Melon" value="10" onClick={handleClick}>Melon, $10</button>
      <button className="button-fruit" type="button" name="Durian" value="15" onClick={handleClick}>Durian, $15</button>
      {renderShoppingList()}
    </div>
  );
};

export default ShoppingList;
