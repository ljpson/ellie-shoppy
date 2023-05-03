import React from 'react';

export default function PriceCard({text, price}) {
    return (
        <div className='bg-gray-50 p-3 sm:p-7 md:p-10 mx-1 rounded-2xl text-center text-base md:text-xl'>
            <p>{text}</p>
            <p className='font-bold text-brand'>{price}원</p>
        </div>
    );
}

