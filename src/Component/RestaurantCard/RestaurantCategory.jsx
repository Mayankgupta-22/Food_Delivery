import React from 'react'
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
    // console.log(props.data);
    // const [showItem, setShowItem] = useState(false);
    const handleClick = () => {
        console.log("clicked");
        // setShowItem(!showItem);
        setShowIndex();
    }
    return (
        <div>
            {/* Hedear  */}
            <div className='w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 '>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='font-bold tex-lg'>{data.title} ({data.itemCards.length})</span>
                    <span> ▼ </span>
                </div>
                {showItem && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory
