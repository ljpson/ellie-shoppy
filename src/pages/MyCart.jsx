import React from 'react';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {

    const { cartQuery: {isLoading, data: products} } = useCart();

    if (isLoading) return <p>Loading...</p>

    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0)

    return (
        <section className='p-2 flex flex-col'>
            <p className='text-2xl text-center font-bold py-4 border-b border-gray-300'>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
            {hasProducts && <>
                <ul className=' border-b border-gray-300 mb-4 px-1 md:px-8'>
                    {products && products.map(product => 
                        <CartItem key={product.id} product={product}/>
                    )}
                </ul>
                <div className='flex justify-between items-center mb-4 px-1 md:px-8'>
                    <PriceCard text="상품 총액" price={totalPrice} />
                    <BsFillPlusCircleFill className='shrink-0'/>
                    <PriceCard text="배송비" price={SHIPPING} />
                    <FaEquals className='shrink-0'/>
                    <PriceCard text="총가격" price={totalPrice + SHIPPING} />
                </div>
                <Button text='주문하기' />
            </>}
        </section>
    );
}

