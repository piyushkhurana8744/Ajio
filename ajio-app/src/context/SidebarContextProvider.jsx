import React from 'react';

export const SidebarContext = React.createContext();

export default function SidebarContextProvider({children}) {

  
  
  const [category, setCategory] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("1");
  const [maxPrice, setMaxPrice] = React.useState("9999");
  const [minDiscount, setMinDiscount] = React.useState("0");
  const [maxDiscount, setMaxDiscount] = React.useState("80");
  const [cartItems, setCartItems] = React.useState(0);

  

  return (
    <SidebarContext.Provider value={{cartItems,setCartItems,category, setCategory,minPrice, setMinPrice,maxPrice, setMaxPrice,minDiscount, setMinDiscount,maxDiscount, setMaxDiscount}} >
        {children}
    </SidebarContext.Provider>
  )
}