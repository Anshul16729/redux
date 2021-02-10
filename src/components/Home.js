import React from 'react';

function Home(){

    return (
        <div>
            <div className="add-to-cart">
            <img src="/images/cart.png"/>
            </div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                 <img src="/images/iphn.png"/>
                </div>
                <div className="text-wrapper item">
                <span>
                    I-phone &nbsp;
                </span>
                <span>
                    Price: $1000.00
               </span>
                </div>
                <div className="btn-wrapper item">
                <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;