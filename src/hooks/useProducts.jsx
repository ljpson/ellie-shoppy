import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProducts, addNewProduct } from '../api/firebase';

export default function useProducts() {
    
    const QueryClient = useQueryClient();

    const productQuery = useQuery(['products'], fetchProducts, { staleTime: 1000 * 60 });

    const addProduct = useMutation(
        ({product, url}) => addNewProduct(product, url),
        {
            onSuccess: () => QueryClient.invalidateQueries(['products']),
        }
    );

    return { productQuery, addProduct }
}