import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

export default function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Fern", price: 20 },
    { id: 4, name: "Bamboo", price: 25 },
    { id: 5, name: "Cactus", price: 12 },
    { id: 6, name: "Agave", price: 18 }
  ];

  const handleAdd = (p) => {
    dispatch(addItem(p));
    setAdded([...added, p.id]);
  };

  return (
    <div>
      <h2>Plants</h2>

      {plants.map(p => (
        <div key={p.id}>
          <p>{p.name} - ₹{p.price}</p>

          <button
            onClick={() => handleAdd(p)}
            disabled={added.includes(p.id)}
          >
            {added.includes(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}