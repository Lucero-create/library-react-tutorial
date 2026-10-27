import React from "react";
import {book} from "./Book";


const Price = ({ salePrice, originalPrice }) => (
  <div className="book__ratings">
    <div className="book__price">
      {book.salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  </div>
);

export default Price;
