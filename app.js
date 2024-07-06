import ReactDOM from 'react-dom/client';
import "./globalStyle.css";
import HomePage from "./src/pages/homePage";
import SearchPage from './src/pages/amazonSearchPage';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductDescription from './src/pages/productDescription';



const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = ["Fresh", "Amazon Mini Tv", "Sell", "Best Sellers", "Electronics", "Books", "Prime", "Fashion", "Home", "Mobiles", "Grocery", "Appliances", "Baby", "Toys", "Deals", "Food"];

const productInfoCards = [
    {
        id  :1,
        title: "Refresh your space",
        products: [
            {
                title: "Dining",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Home",
                img : "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Kitchen",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Health and Beauty",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
            }

        ],
    },
    {
        id  :2,
        title: "Electronics",
        products: [
            {
                title: "Home",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Kitchen",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Health and Beauty",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
            }
        ],
    },
    {
        id  :3,
        title: "Books",
        products: [
            {
                title: "Home",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Kitchen",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Health and Beauty",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
            }
        ],
    },
];




const App = () => {

    const [products, setProducts] = useState([]);
    // console.log(searchText)

    async function getData(){
        const res = await fetch(`https://dummyjson.com/products?limit=194`);
        const data = await res.json();
        // console.log(data)
        setProducts(data.products);
        
    }

    useEffect(()=>{
        getData()
    }, []);

    const [searchText, setSearchText] = useState("");
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage searchText={searchText} setSearchText={setSearchText} categories={categories} productInfoCards={productInfoCards}/>
        },
        {
            path: "/search",
            element: <SearchPage searchText={searchText} setSearchText={setSearchText} categories={categories}/>
        },
        {
            path: "/description/:id",
            element: <ProductDescription 
            categories={categories}
            products={products}
            />
        }
    ])

    return (
        <RouterProvider router={router} />
    );
};

root.render(<App/>);