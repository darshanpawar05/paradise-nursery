import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector(state => state.cart.items);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div style={{ background: "lightgreen", padding: "10px" }}>
      <h3>🌱 Paradise Nursery</h3>
      <p>Home | Plants | Cart 🛒 ({count})</p>
    </div>
  );
}