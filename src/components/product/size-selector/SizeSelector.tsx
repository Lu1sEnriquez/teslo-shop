"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { Size } from "../../../interfaces/product.interface";

interface Props {
  selectedSize: Size;
  availableSizes: Size[]; // ['XS','S', 'M', 'XL', 'XXL']
}
export const SizeSelector = ({ availableSizes, selectedSize }: Props) => {
  const [selectSize, setSelectSize] = useState(selectedSize);
  
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div>
        {availableSizes.map((size) => (
          <button
            onClick={(e) => {
              setSelectSize(size);
            }}
            key={size}
            // clsx sirve para colocar condicionales en las clases
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size == selectSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
