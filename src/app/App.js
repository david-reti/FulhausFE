import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "./pages/Products";
import { UserCart } from "./providers/UserCart";
import { Cart } from "./components/Cart";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [cart, setCart] = useState({items: [], open: false, total: 0});

  return (
    <QueryClientProvider client={queryClient}>
      <UserCart.Provider value={{cart, setCart}}>
        <Products/>
        <Cart/>
      </UserCart.Provider>
    </QueryClientProvider>
  );
}

export default App;
