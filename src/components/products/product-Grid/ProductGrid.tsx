import { Product } from "@/interfaces"
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    product : Product[];


}

export const ProductGrid = ({product}:Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {product.map(product =>(
            <ProductGridItem key={product.slug} product={product}/>
        ))
        }
    </div>
  )
}
