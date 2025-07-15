import { useAtomx } from 'atomix-react'
import ProductCard from '../product/ProductCard'
import type { InitalState } from '../../types'
export default function Product() {
    const products = useAtomx((s: InitalState) => s.products)
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
