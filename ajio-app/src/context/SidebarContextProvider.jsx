import React from "react";
import axios from "axios";

export const SidebarContext = React.createContext();

export default function SidebarContextProvider({ children }) {
  
  const getCartItems = async () => {
    let res = await axios.get(`http://localhost:8080/data`);
    let data = res.data.filter((elem) => elem.quantity !== 0);
    setCartData(data);
    setCartLength(data.length);
  };

  React.useEffect(() => {
    getCartItems();
  }, []);

  const [category, setCategory] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("1");
  const [maxPrice, setMaxPrice] = React.useState("9999");
  const [minDiscount, setMinDiscount] = React.useState("0");
  const [maxDiscount, setMaxDiscount] = React.useState("80");
  const [cartLength, setCartLength] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);

  return (
    <SidebarContext.Provider
      value={{
        cartData,
        setCartData,
        cartLength,
        setCartLength,
        category,
        setCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        minDiscount,
        setMinDiscount,
        maxDiscount,
        setMaxDiscount,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
