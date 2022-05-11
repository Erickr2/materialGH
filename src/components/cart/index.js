import React from "react";
import  ellas  from "../../imgs/ellas1.jpeg";

export const Carrito = () => {
  return (
    <div className="carts">
      <div className="cart">

        <div className="cart-close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>

        <div className="cart-center">
          <div className="cart-item">
              <img src={ellas} alt=""></img>
              <div>
                <h3>title</h3>
                <p className='price'>$300</p>
              </div>
              <div>
                <box-icon name="up-arrow" type="solid"></box-icon>
                <p className="cantidad">1</p>
                <box-icon name="down-arrow" type="solid"></box-icon>
              </div>
              <div className="remove-item">
                <box-icon name="trash"></box-icon>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
