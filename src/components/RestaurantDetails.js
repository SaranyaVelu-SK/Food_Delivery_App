import { IDLI_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantDetails = () =>{
    const availableDishes = [{dishName:'Idli',price:'20',imgSrc:IDLI_IMG}]
    const {resName} = useParams();
 return (
    <div>
        <img></img>
        <h3>{resName}</h3>
        <p>cuisines</p>
        <p>Cost for 2</p>
        <p>Ratings</p>
        {availableDishes?.map((dish)=><div>
            <p>{dish?.dishName}</p>
            <p>{dish?.price}</p>
            <img src={dish?.imgSrc}></img>
        </div>)}
    </div>
 )
}
export default RestaurantDetails;