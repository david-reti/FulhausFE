import { FaTrash } from "react-icons/fa";
import { UserCart } from "../providers/UserCart.provider";
import { removeProductFromCart } from "../util/Cart.util";

// This component displays a single order item - the format of the item is based on the format from the API 
const OrderItem = ({item, quantity}) =>
    <UserCart.Consumer>
    {({cart, setCart}) =>
        <article className="flex pt-8">
            {/* Item Image */}
            <img className="w-32 h-32" src={item.imageURLs[0]} alt=""></img>
            {/* Item Name, Price & Quantity */}
            <div className="flex flex-col justify-between flex-1 ml-2">
                <div className="flex">
                    <h2 className="font-serif text-xl font-light">{item.fulhausProductName}</h2>
                    {/* Button to allow the item to be removed from the cart */}
                    <button className="h-fit mt-2" onClick={() => setCart(removeProductFromCart(cart, item))}>
                        <FaTrash/>
                    </button>
                </div>
                {/* The price and quantity of the item */}
                <div className="flex justify-between">
                    <p className="font-serif text-2xl text-gray-400">{`$${item.rentalPrice}`}</p>
                    <p className="font-serif text-2xl">{`${quantity}x`}</p>
                </div>
            </div>
        </article>
    }
    </UserCart.Consumer>

export { OrderItem };
