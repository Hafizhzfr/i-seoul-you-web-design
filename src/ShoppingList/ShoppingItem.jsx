import PropTypes from 'prop-types';

const ShoppingItem = ({ rawList, realList, totalPrice }) => {
  console.log('rawList :>> ', rawList);
  console.log('realList :>> ', realList);
  console.log('totalPrice :>> ', totalPrice);

  const renderTableData = () => realList.map((shoppingItem, index) => {
    const { itemInput, priceInput } = shoppingItem; // destructuring
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{itemInput}</td>
        <td>
          {'$'}
          {priceInput}
        </td>
        {rawList.reduce((n, val) => n + (val === shoppingItem), 0)}
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
        {' '}
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
