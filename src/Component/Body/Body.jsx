import React, { useState, useEffect } from 'react'
import './Body.css'
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard/RestaurantCard'
import ShimmerUi from '../Shimmer/ShimmerUi'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus'

// "Props:- properties is somthing which is pass to the component  prop are jusy arguement to a functions  "
//  when you dynamicly passing some to a component , pass through a props
// React wrap all props as object
// destructuring on the object  ------->    const RestaurantCard = ({resName,cuisin}) =>{} OR  const {resName,cuisine} = props



const Body = () => {
    //Local State Variable - Supper powerful variable
    const [listofRestaurant, setlistofRestaurant] = useState([]);
    const [filteredrestaurant, setFilteredrestaurant] = useState([])
    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // whenever state variable update,ract triggers a reconciliation cycle (re-render the component)
    useEffect(() => {
        // it take two argument 1. arrow function 2. dependency array
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.21290&lng=81.42930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();


        // console.log(json);
        setlistofRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredrestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>Looks like you're offline !! check ypur internet connection</h1>)
    // Condition Rendering - 
    if (listofRestaurant.length === 0) {
        return <ShimmerUi />
    }
    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type="text" className='search-box' placeholder='Search of an Items' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className='bg-green-100 rounded-lg p-1' onClick={() => {

                        // fiter the restaurant Card and update the ui
                        // searchtext
                        const filteredrestaurant = listofRestaurant.filter(
                            (res) => res.info.cuisines.includes(searchText));
                        setFilteredrestaurant(filteredrestaurant)


                    }}>Search</button>
                </div>

                <button className='filter-btn'
                    onClick={() => {
                        const filteredList = listofRestaurant.filter((res) => res.info.avgRating > 4);
                        setlistofRestaurant(filteredList);
                    }}
                >

                    Top Rated Restaurant</button>
            </div>

            <div className='res-container'>

                {/* /* {
                    listofRestaurant.map((resList) => <RestaurantCard key={resList.data.id} name={resList.data.name} cuisines={resList.data.cuisines} rating={resList.data.avgRating} cost={resList.data.costForTwo} time={resList.data.deliveryTime} image={resList.data.cloudinaryImageId} />)
                }*/ }

                {filteredrestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

                        {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}
                    </Link>

                ))}




            </div>



        </div>
    )
}

export default Body
