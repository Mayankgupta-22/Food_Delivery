import { useEffect, useState } from "react";
import { MENU_API } from "./constent";
const useRestaurantMenu = (resId) => {

    const [RestaurantMenu, setRestaurantMenu] = useState(null);

    //fetch data

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {

        const data = await fetch(MENU_API + resId + " &catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setRestaurantMenu(json.data);


    }



    return RestaurantMenu;
}
export default useRestaurantMenu