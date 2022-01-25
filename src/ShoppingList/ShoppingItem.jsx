import PropTypes from 'prop-types';
import './ShoppingList.css';

const ShoppingItem = ({ rawList, realList, totalPrice }) => {
  // COUNT OCCURENCES OF ELEMENT INSIDE AN ARRAY
  const countOccurences = (shoppingItem) => {
    let occurences = 0;
    for (let index = 0; index < rawList.length; index += 1) {
      const element = rawList[index].itemInput;
      if (element === shoppingItem.itemInput) {
        occurences += 1;
      }
    }
    return occurences;
  };

  const renderTableData = () => realList.map((shoppingItem, index) => {
    const { itemInput, priceInput } = shoppingItem;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{itemInput}</td>
        <td>
          {'$'}
          {priceInput}
        </td>
        <td>
          {countOccurences(shoppingItem)}
        </td>
      </tr>
    );
  });

  return (
    <>
      <h2>Here is your shopping list</h2>
      <table className="shopping-list">
        <tr>
          <th>No</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {renderTableData(realList)}
      </table>
      <p className="price-text">
        Total Price:
        {' $'}
        {totalPrice}
      </p>
    </>
  );
};

ShoppingItem.propTypes = {
  rawList: PropTypes.instanceOf(Array).isRequired,
  realList: PropTypes.instanceOf(Array).isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default ShoppingItem;
