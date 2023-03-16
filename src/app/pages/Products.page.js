import axios from "axios";
import { useQuery } from "react-query";
import { ProductDetails } from "../components/ProductDetails.component";
import { FURNITURE_API_URL } from "../config/URLs.config";

// This is the main products page - it automatically retrieves a list of products from the API
// In a production environment, I would add a nicer loading / error message and I might refactor the loader
const Products = () => {
    const { isLoading, error, data } = useQuery('furnitureItems', () => {
        return axios.get(FURNITURE_API_URL);
    });

    if(isLoading) return "Loading...";

    if(error) return `An error has occured: ${error}`;

    return (
        <div className="w-full h-screen flex">
            <aside className="hidden lg:block w-1/4 py-3">
                <img className="h-full object-cover" src={data ? data.data.data.products[0].imageURLs[0] : ""} alt=""></img>
            </aside>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-3 justify-items-center flex-1 sm:mx-8">
                {data ? data.data.data.products.map(product => <ProductDetails {...{product}} key={product._id}/>) : null}
            </section>
        </div>
    );
}

export { Products };
