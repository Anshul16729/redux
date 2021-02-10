import React from 'react';

function Header(props){
    console.log("Header",props.data)
    return (
        <div>
            <div className="add-to-cart">
            <img src="/images/cart.png"/>
            </div>
       
        </div>
    )
}

export default Header;