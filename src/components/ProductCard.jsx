import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
    product,
    product : {id, image, title, category, price}
}) {
    const navigate = useNavigate();
    return (
        <li onClick={() => {navigate(`/productDetail/${id}`, {state: {product}} )}}
        className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'>
            <img className='w-full' src={image} alt={title}/>
            <h3 className='mt-2 px-2 text-lg truncate'>{title}</h3>
            <div className='mb-2 px-2 text-gray-600 flex flex-col'>
                <p>{`${price}원`}</p>
                <p>{category}</p>
            </div>        
        </li>
    );
}

