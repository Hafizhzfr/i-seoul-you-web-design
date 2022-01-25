import PropTypes from 'prop-types';

const ShoppingItem = ({ rawList, realList, totalPrice }) => {
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
        {countOccurences(shoppingItem)}
        <td />
      </tr>
    );
  });

  return (
    <>
      <h2>Here is your shopping list</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {renderTableData(realList)}
        </tbody>
      </table>
      <p>
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
