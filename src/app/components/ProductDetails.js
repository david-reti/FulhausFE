import { IconContext } from 'react-icons';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import { UserCart } from '../providers/UserCart';

const addProductToCart = (cart, product) => {
    return {items: cart.items.concat([product]), total: cart.total + product.rentalPrice, open: true};
}

// This component contains an image of the product, as well as its rating, price and ability to add it to cart
const ProductDetails = ({ product }) =>
    <UserCart.Consumer>
    {({cart, setCart}) =>   
        <article className="flex flex-col justify-between border border-gray-300 p-4 w-full">
            {/* Product Image */}
            <img className="w-32 mx-auto aspect-square" src={product.imageURLs[0]} alt=""></img>
            {/* Product Name & Rating - all 5 starts at this time */}
            <div>
                <p className="font-sans text-xl font-medium mt-4">{product.fulhausProductName}</p>
                <div className='flex mt-2'>
                    <IconContext.Provider value={{className: 'text-yellow-500'}}>
                        {new Array(5).fill(0).map((_, i) => <FaStar key={i}/>)}
                    </IconContext.Provider>
                </div>
            </div>
            {/* Product price and the button to add it to the cart*/}
            <div className="flex justify-between">
                <p className="font-sans font-bold flex items-center">${product.rentalPrice}</p>
                <button className='p-2 cursor-pointer border rounded-full bg-gray-200' onClick={() => setCart(addProductToCart(cart, product))}>
                    <IconContext.Provider value={{className: 'text-2xl text-red-400'}}>
                        <FaCartPlus/>
                    </IconContext.Provider>
                </button>
            </div>
        </article>
    }
    </UserCart.Consumer>

export { ProductDetails };
