import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';

const SHIPPING = 3000;

export default function MyCart() {

    const { uid } = useAuthContext();
    const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));

    if (isLoading) return <p>Loading...</p>

    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0)

    return (
        <section>
            <p>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
            {hasProducts && <>
                <ul>
                    {products && products.map(product => 
                        <CartItem key={product.id} product={product} uid={uid}/>
                    )}
                </ul>
                <div className='flex justify-between items-center'>
                    <PriceCard text="상품 총액" price={totalPrice} />
                    <BsFillPlusCircleFill />
                    <PriceCard text="배송비" price={SHIPPING} />
                    <FaEquals />
                    <PriceCard text="총가격" price={totalPrice + SHIPPING} />
                </div>
            </>}
        </section>
    );
}

