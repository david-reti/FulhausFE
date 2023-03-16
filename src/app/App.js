import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "./pages/Products.page";
import { UserCart } from "./providers/UserCart.provider";
import { Cart } from "./components/Cart.component";
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
