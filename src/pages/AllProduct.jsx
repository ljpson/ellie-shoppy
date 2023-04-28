import React from 'react';
import { useParams } from 'react-router-dom';

export default function AllProduct() {
    const { keyword } = useParams();
    console.log(keyword);
    return (
        <div>
            <h1>{keyword ? `검색상품${keyword}` : `메인`}</h1>
        </div>
    );
}

