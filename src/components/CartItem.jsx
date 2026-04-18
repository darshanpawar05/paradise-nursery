import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

export default function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        items.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>₹{item.price}</p>

            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

            <p>Qty: {item.quantity}</p>
            <p>Total: ₹{item.price * item.quantity}</p>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      <h3>Total Cart: ₹{total}</h3>

      <button>Checkout (Coming Soon)</button>

      <button onClick={() => window.scrollTo(0, 0)}>
        Continue Shopping
      </button>
    </div>
  );
}