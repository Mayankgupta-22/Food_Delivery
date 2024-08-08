
import { useDispatch } from 'react-redux';
import CDN_URL from '../../utils/constent';
import { addItem } from '../redux_Slice/cartSlice';

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    }


    return (
        <div>
            {items.map(item => <div key={item.card.info.id} className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>

                <div className='w-9/12'>
                    <div className='py-1'>
                        <span className='font-bold'>{item.card.info.name}</span>
                        <br />
                        <span> -₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice}</span>
                    </div>
                    <div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                </div>
                <div className='w-3/12 p-4'>

                    <div className='absolute '>
                        <button className=' text-green-700 font-bold p-2 bg-white shadow-lg mx-9 rounded-lg my-16'
                            onClick={() => { handleAddItem(item) }}>
                            Add+</button>
                    </div>
                    <img className='rounded-lg ' src={CDN_URL + item.card.info.imageId} alt="" />
                </div>
            </div>)}

        </div>
    )
}

export default ItemList
