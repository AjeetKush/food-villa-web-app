import RestaurantCard, { withHighRating } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const HighRatedRestaurantCard = withHighRating(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const proxyUrl = "https://proxy.cors.sh/";
      const apiUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const data = await fetch(proxyUrl + apiUrl);
      const json = await data.json();
      console.log(json);

      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      </div>
    );
  }

  if (listOfRestaurants?.length === 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  console.log(searchText);
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 flex items-center">
          <div className="search m-4 p-4">
            <input
              type="text"
              placeholder="Search here"
              className="border border-solid border-black px-1 rounded-md "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
          </div>

          <div className="search m-4 p-4">
            <button
              className="px-4 py-1 bg-green-200 m-4 rounded-lg"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });

                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <div className="search m-4 p-4">
            <button
              className="filter-btn px-4 py-1 bg-gray-200 rounded-lg"
              onClick={() => {
                // filter logic here

                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating >= 4.3
                );

                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurant{" "}
            </button>
          </div>

          <div className="search m-4 p-4">
            <button
              className="reset-filter-btn px-4 py-1 bg-gray-200 rounded-lg"
              onClick={() => {
                setFilteredRestaurant(listOfRestaurants);
              }}
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.3 ? (
              <HighRatedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
