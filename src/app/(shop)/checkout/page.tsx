import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Verificar Orden" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          {/* Carrito */}

          <div className=" flex flex-col mt-5">
            <span className="text-xl">Ajustar Elementos</span>
            <Link href={"/cart"} className="underline mb-5">
              Editar carrito
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
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout -Resumen de la compra */}

          <div className="  bg-white rounded-xl shadow-xl p-7">
            <div>
              <h2 className="text-2xl font-semibold">Diraccion de entrega</h2>
              <div className="mb-10">
                <p>Luis Enriquez</p>
                <p>Av. Nogales No.103</p>
                <p>Col. Los Alisos</p>
                <p>Ciudad de México, CDMX.</p>
                <p>CP: 3244</p>
                <p>554323342</p>
              </div>
              {/* Divider */}
              <div className="w-full h-0.5 bg-gray-200 mb-10" />

              <h2 className="mb-2 text-2xl">Resumen de orden</h2>

              <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">3 Ariculos</span>

                <span>Subtotal</span>
                <span className="text-right">/$ 100</span>

                <span>Inpuestos(15%)</span>
                <span className="text-right">$1100</span>

                <span className="text-2xl mt-5">Total: </span>
                <span className=" text-2xl mt-5 text-right">$1100</span>
              </div>

              {/* button de confirmaccion */}
              <div className=" mb-2 w-full mt-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer clic en Confirmar pedido, aceptas los{" "}
                  <a href="#" className="underline">
                    Términos y Condiciones
                  </a>{" "}
                  y{" "}
                  <a href="#" className="underline">
                    politicas de Uso
                  </a>
                </span>
                <Link
                  className="btn-primary flex justify-center"
                  href={"/orders/payload"}
                >
                  Colocar orden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
