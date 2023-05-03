import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
    const { 
        isLoading, 
        error, 
        data: products
    } = useQuery(['products'], getProducts);

    return (
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'>
            {products && 
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </ul>
        </>
    );
}

