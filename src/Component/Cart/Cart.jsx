import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../RestaurantCard/ItemList';
import { clearCart } from '../redux_Slice/cartSlice';

const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()
    const handlclearCart = () => {
        dispatch(clearCart())

    }
    return (
        <div className=' text-center m-5 p-5'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='w-6/12 m-auto'>
                <button className='p-2 m-2 bg-black text-white rounded-xl'
                    onClick={handlclearCart}
                >Clear Cart</button>{
                    cartItem.length == 0 && <h1>Kuch Mangwa le </h1>
                }
                <ItemList items={cartItem} />
            </div>

        </div>
    )
}

export default Cart
