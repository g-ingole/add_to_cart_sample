import React from 'react'
import './home.css'
// import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = (props) => {
    console.log("props", props)
    return (
        <div>
            {/* <>
                <AiOutlineShoppingCart className='mt4' style={{ marginLeft: "1000px", fontSize: "100px" }} />
                <span>{props.data.length}</span>

            </> */}
            <div className="container mt3">

                <div className="productcont">
                    <div className="product">
                        <img className="productname" src='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' height={350} width={400} />
                        <p>Product description excerpt...</p>
                        <p className="price">$5.05</p>
              
                        <button onClick={() =>
                            props.addToCartHandler({ price: 5.05, })} className="addtocart">Add To Cart</button>
                    
                    <button onClick={() =>
                            props.removeToCartHandler()} className="addtocart">Remove To Cart</button>
                    
                    
                    </div>
                    {/* <div className="product">
                        <img className="productname" src='https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='' height={350} width={1500} />
                        <p>Product description excerpt...</p>
                        <p className="price">$8.50</p>
                        <button className="addtocart">Add To Cart</button>
                    </div> */}
                    {/* <div className="product">
                        <img className="productname" src='https://cdn.shopify.com/s/files/1/0015/3750/7373/files/hot-coffee-products.jpg?v=1678294872&width=550' alt='' height={350} width={1500} />
                        <p>Product description excerpt...</p>
                        <p className="price">$10.50</p>
                        <button className="addtocart">Add To Cart</button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Home
