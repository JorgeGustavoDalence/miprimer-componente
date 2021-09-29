function ItemListContainer(props) {
    const { greeting } = props;
    return (
      <ul className="list-group">
        <li className="list-group-item bg-success">{greeting}</li>
      </ul>
    );
  }
  
  export default ItemListContainer;