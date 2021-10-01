// Entregable 04 ->
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

function ItemCount(props) {
  
  const { stock, initial, onAdd } = props.props;
  const [cantidad, setCantidad] = useState(initial);
  const [actualStock, setActualStock] = useState(stock);
  
  const add = () => {
    if (cantidad <= stock - 1) {
      setCantidad(cantidad + 1);
    }
  };

  const substract = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  useEffect(() => {
  
  }, [actualStock]);

  const agregarAlCarrito = () => {
    if ( count > 0 && count <= stock){
        alert("SE AGREGARON TODOS LOS ITEMS ELEGIDOS AL CARRITO");
    }
    else{
        alert("NO SE AGREGARON ITEMS AL CARRITO");
    }
}

  return (
    <div>
      <p>Cantidad disponible: {actualStock}</p>
      <InputGroup className="mb-1 form-calculator-minmax">
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={substract}
        >
          -
          </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={cantidad}
          readOnly
        />
        <Button variant="outline-secondary" 
        id="button-addon1" 
        onClick={add}>
          +
        </Button>
      </InputGroup>
      
      <Button
        variant="success"
        onClick={(e) => {
          e.preventDefault(); 
          actualStock >= cantidad &&
            setActualStock(onAdd(actualStock, cantidad));
          cantidad > actualStock &&
            alert("No queda más stock, no se puede agregar al carrito!");
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;