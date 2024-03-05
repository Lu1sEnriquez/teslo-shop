import { initialData } from "@/seed/seed";
import { Product } from "@/interfaces/product.interface";
import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";

/**
 * Recibe Props porque es una ruta dinamica
 * que resive el parametro slug
 */
interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find(
    (product) => product.slug === slug
  ) as Product;

  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* Slidershow */}
      <div className="col-span-1 md:col-span-2">
        <ProductSlideshow
          className="hidden md:block"
          title={product.title}
          images={product.images}
        />
        <ProductMobileSlideshow
          className="block md:hidden"
          title={product.title}
          images={product.images}
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.price}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={0} />
        {/* Button */}
        <button className="btn-primary my-5 ">Agregar al Carrito</button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
