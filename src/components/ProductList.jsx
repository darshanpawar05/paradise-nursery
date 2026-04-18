import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

export default function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const plants = [
    // Indoor
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, category: "Indoor", img: "https://via.placeholder.com/100" },

    // Outdoor
    { id: 4, name: "Fern", price: 18, category: "Outdoor", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Bamboo", price: 25, category: "Outdoor", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Palm", price: 30, category: "Outdoor", img: "https://via.placeholder.com/100" },

    // Succulent
    { id: 7, name: "Cactus", price: 12, category: "Succulent", img: "https://via.placeholder.com/100" },
    { id: 8, name: "Agave", price: 18, category: "Succulent", img: "https://via.placeholder.com/100" },
    { id: 9, name: "Echeveria", price: 22, category: "Succulent", img: "https://via.placeholder.com/100" }
  ];

  const categories = ["Indoor", "Outdoor", "Succulent"];

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded([...added, plant.id]);
  };

  return (
    <div>
      <h2>Plants</h2>

      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(p => (
              <div key={p.id}>
                <img src={p.img} alt={p.name} />
                <p>{p.name}</p>
                <p>₹{p.price}</p>

                <button
                  onClick={() => handleAdd(p)}
                  disabled={added.includes(p.id)}
                >
                  {added.includes(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}