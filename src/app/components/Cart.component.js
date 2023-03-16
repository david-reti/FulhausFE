import ReactSlidingPane from "react-sliding-pane";
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { UserCart } from "../providers/UserCart.provider";
import { OrderItem } from "./OrderItem.component";

// This component represents the contents of the user's cart - it takes place in a modal, so that it can slide in an out
const Cart = () =>
    <UserCart.Consumer> 
    {({cart, setCart}) =>
        <ReactSlidingPane isOpen={cart.open} width="25%" hideHeader={true} onRequestClose={() => setCart({...cart, ...{open: false}})}>
            <div className="flex flex-col h-full">
                {/* Title */}
                <h1 className="text-5xl font-serif mt-6">My Order</h1>
                {/* Order Items */}
                <div className="flex-1 overflow-y-auto pr-4">
                    {cart.items ? cart.items.map(item => <OrderItem item={item.item} quantity={item.quantity}/>) : null}
                </div>
                {/* Order total and Checkout Button */}
                <div>
                    <div className="flex justify-between mb-6">
                        <p className="font-serif text-4xl">Total</p>
                        <o className="font-serif text-4xl">{`$${cart.total}`}</o>
                    </div>
                    <button className="font-sans text-lg border w-full py-6 bg-black text-white">Checkout</button>
                </div>
            </div>
        </ReactSlidingPane>
    }
    </UserCart.Consumer>

export { Cart };
