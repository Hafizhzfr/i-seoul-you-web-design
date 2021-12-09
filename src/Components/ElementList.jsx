/* eslint-disable max-len */
import PropTypes from 'prop-types';

// props bisa juga disebut parameter
const ElementList = (props) => {
  const { render, data } = props; // ini 'render' => fungsi yg mengembalikan suatu element/komponen, 'data' => yang mau diolah
  return (
    <>
      {/* <> react fragment sebagai penanda parent
    biar gausah pake div */}
      {data.map((item) => (
        render(item)
      ))}
    </>
  );
};

ElementList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired, // data apapun yang penting array
  render: PropTypes.func.isRequired // render berbentuk function
};

export default ElementList;
