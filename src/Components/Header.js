import React from 'react'
import './home.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (props) => {
    console.log("Header", props.data)
    return (
        <div>
            <>
                <AiOutlineShoppingCart className='mt4' style={{ marginLeft: "1000px", fontSize: "100px" }} />
                <span>{props.data.length}</span>
            </>
        </div>
    )
}

export default Header
