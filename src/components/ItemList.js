import Item from './Item';
import { Spinner } from 'react-bootstrap';


function ItemList({ items }) {
    return (
      <>
        {items.length ? (
          items.map((elem, idx) => <Item props={elem} key={idx} />)
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </>
    );
  }
  

export default ItemList;
