
import "./RestaurantCard.css"
import CDN_URL from '../../utils/constent'
import UserConetxt from '../../utils/UserContext';
/***
 * RestaurantCard
 *  -Img
 *  - name od Res, Star Rating , cuisine,delivery time
 */

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

// * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;



    return (
        <div className='ml-10 p-4 w-[250px] h-[300px] hover:bg-gray-200 rounded-xl'>
            <img className="res-logo"

                src={CDN_URL + cloudinaryImageId}

            />

            {/* <h3>{props.name}</h3>
                <h4>{props.cuisines.join(', ')}</h4>
                <h4>{props.rating} &#9734;</h4>
                <h4> &#8377; {props.cost / 100} FOR TWO</h4>
                <h4>{props.time}minutes</h4> */}
            <h3 className='font-bold py-1'>{name}</h3>
            <h4 className='text-sm  text-gray-700'>{cuisines.join(', ')}</h4>
            <h4 className='text-sm  text-gray-700'><span className='text-sm'>⭐</span>{avgRating} </h4>
            <h4 className='text-sm  text-gray-700'>{costForTwo} </h4>
            <h4 className='text-sm  text-gray-700'> {deliveryTime} minutes</h4>

        </div>


    )
}

// Higher Order Component 

// input-RestaurantCrad =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div >
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard
