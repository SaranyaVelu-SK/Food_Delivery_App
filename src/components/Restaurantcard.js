import { FOOD_IMG_URL } from "../utils/constants";
import {Link} from 'react-router-dom'

const RestaurantCard =({resData})=>{
    return(
        <Link to={`/resDetails/${resData?.info?.name}`} style={{textDecoration:'none',color:'black'}}>
            <div className ='rest-card'>
            <div>
                <img src={FOOD_IMG_URL+ resData?.info?.cloudinaryImageId} style={{width:'97%',padding:'5px',height:'200px'}}></img>
            </div>
            <div>
                <p>{resData?.info?.name}</p>
                <p>{resData?.info?.cuisine?.join('')}</p>
                <p>{resData?.info?.avgRating}</p>
                <p>{resData?.info?.sla?.deliveryTime} minutes</p>
                <p>{resData?.info?.costForTwo}</p>
            </div>
        </div>
        </Link>
    )
 };

 export default RestaurantCard;