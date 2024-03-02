import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

export default function Home() {
  const products = initialData.products

  return (
    <>
      <Title title="Tienda"
      subtitle="Todos Los Productos"
      className="mb-2"
      />

      <ProductGrid product={products}/>
    </>
  );
}
