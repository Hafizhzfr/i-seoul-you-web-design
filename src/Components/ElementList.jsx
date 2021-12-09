/* eslint-disable max-len */
import PropTypes from 'prop-types';

// props bisa juga disebut parameter
const ElementList = (props) => {
  const { renderItem, data, keyExtractor } = props; // ini 'render' => fungsi yg mengembalikan suatu element/komponen, 'data' => yang mau diolah
  return (
    <ul>
      {/* <> react fragment sebagai penanda parent
    biar gausah pake div */}
      {data.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

ElementList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired, // data apapun yang penting array
  renderItem: PropTypes.func.isRequired, // render berbentuk function
  keyExtractor: PropTypes.func.isRequired
};

export default ElementList;
