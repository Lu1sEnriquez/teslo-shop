import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { Category } from "@/interfaces/product.interface";

interface Props {
  params: {
    id: Category;
  };
}

/** FORMAS DE TIPAR
 * {[key: ValidCategories] or Record<ValidCategories, string>}: indica que el parámetro debe ser de tipo Valid Categories
 */
const labels: Record<Category,string> = {
  'men': 'para Hombres',
  kid: 'para Mujeres',
  women: 'para Niños',
  unisex: 'para unisex'

}


export default function CategoryPage({ params }: Props) {
  const { id } = params;

  // if(id === 'kids'){
  //   notFound();
  // }
  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  return (
    <> 
      <Title title={`Artículos de ${labels[id]}`} subtitle="Todos Los Productos" className="mb-2" />

      <ProductGrid product={products} />
    </>
  );
}
