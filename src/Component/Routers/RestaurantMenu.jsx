import ShimmerUi from '../Shimmer/ShimmerUi';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import { useState } from 'react';
import RestaurantCategory from '../RestaurantCard/RestaurantCategory';

const RestaurantMenu = () => {
    // const [RestaurantMenu, setRestaurantMenu] = useState(null)

    const { resId } = useParams();
    // console.log(resId);

    const RestaurantMenu = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");

    //     const json = await data.json();
    //     console.log(json);
    //     setRestaurantMenu(json.data)
    // };
    if (RestaurantMenu === null) return <ShimmerUi />;

    const { name, cuisines, costForTwoMessage } = RestaurantMenu?.cards[2]?.card?.card?.info

    const { itemCards } = RestaurantMenu?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(RestaurantMenu?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = RestaurantMenu?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);



    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <p className='font-bold text-'>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* Categories accordian */}
            {categories.map((category, index) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                showItem={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
            />)}
        </div>
    )
}

export default RestaurantMenu
