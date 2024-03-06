import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {

  // redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Carrito" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        
          {/* Carrito */}

          <div className=" flex flex-col mt-5">
            <span className="text-xl">Agregar más Items</span>
            <Link href={"/"} className="underline mb-5">
              ContinuarComprando
            </Link>

            {/* Items */}
            {productInCart.map((product) => (
              <div key={product.slug} className="flex flex-row">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded-md mb-5"
                />
                <div className="flex flex-col">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />

                  <div className="underline">Remover</div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout -Resumen de la compra */}

          <div className="  bg-white rounded-xl shadow-xl p-7">
            <h2 className="mb-2 text-2xl">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Ariculos</span>

              <span>Subtotal</span>
              <span className="text-right">/$ 100</span>

              <span>Inpuestos</span>
              <span className="text-right">$1100</span>

              <span className="text-2xl mt-5">Total: </span>
              <span className=" text-2xl mt-5 text-right">$1100</span>
            </div>

            <div className=" mb-2 w-full mt-5">
              <Link
                className="btn-primary flex justify-center"
                href={"/checkout/address"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
