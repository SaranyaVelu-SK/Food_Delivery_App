import RestaurantCard from "./Restaurantcard";
import foodData from '../utils/mockData';
import { useState , useEffect} from "react";

const BodyComp = () => {
    const [currentFoodData,setCurrentFoodData] = useState(foodData);
    const [searchText,setSearchText] = useState('')
 const filterRestaurants =( ) =>{
    const filteredData = foodData.filter((data)=>data?.info?.avgRating>4.3);
    setCurrentFoodData(filteredData)
 }

//  useEffect(()=>{

//     const getData =async ()=>{
//         const restData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//         const finalData = await restData.json();
//         console.log(finalData)
//     }
//     getData();
//  },[])
 console.log('rendered')
  return (
    <div className="body-component">
      <div>
        <input name = 'search-text' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button onClick={()=>{setCurrentFoodData(foodData.filter((food)=>food?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))}}>
          Search
        </button>
      <button onClick={()=>{filterRestaurants()}}> Top Rated Restaurants</button>
      </div>
      
      <div className="rest-container">
        {currentFoodData?.map((food) => (
          <RestaurantCard key={food?.info?.id} resData={food} />
        ))}
      </div>
    </div>
  );
};

export default BodyComp;
