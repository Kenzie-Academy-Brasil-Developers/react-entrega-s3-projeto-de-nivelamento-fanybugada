import "./style.css";

function Cart({ products }) {
  return (
    <div className="cartContainer">
      <h4>
        Total: R$:{" "}
        {products.reduce((acc, item) => acc + (item.price - item.discount), 0)}
      </h4>
      <h4>
        Valor Economizado: R$:{" "}
        {products.reduce((acc, item) => acc + item.discount, 0)}
      </h4>
    </div>
  );
}
export default Cart;
