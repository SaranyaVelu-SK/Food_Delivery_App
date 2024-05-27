import { FOOD_IMG_URL } from "../utils/constants";

const RestaurantCard =({resData})=>{
    return(
        <div className ='rest-card'>
            <div>
                <img src={FOOD_IMG_URL+ resData?.info?.cloudinaryImageId} style={{width:'97%',padding:'5px'}}></img>
            </div>
            <div>
                <p>{resData?.info?.name}</p>
                <p>{resData?.info?.cuisine?.join('')}</p>
                <p>{resData?.info?.avgRating}</p>
                <p>{resData?.info?.sla?.deliveryTime} minutes</p>
                <p>{resData?.info?.costForTwo}</p>
            </div>
        </div>
    )
 };

 export default RestaurantCard;