import { useReducer } from "react";

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
    {
      id: 4,
      name: "Item 4",
    },
  ];
  const initialState = {
    cart: [],
  };
  const shoppingReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "REMOVE_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(shoppingReducer, initialState);
  return (
    <div>
      {state.cart.map((item, index) => (
        <div key={index}>
          {item.name}
          {"  "}
          <button
            onClick={() => dispatch({ type: "REMOVE_CART", payload: item })}
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.map((item, index) => (
        <div
          key={index}
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default ShoppingCart;
