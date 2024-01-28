import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        className="rounded-lg w-full h-40 object-cover mb-4"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-600">{cuisines.join(", ")}</p>

      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">{avgRating} ⭐️</span>
          {avgRating >= 4.3 && (
            <span className="text-gray-600">High Rating!</span>
          )}
        </div>
        <p className="text-gray-800 font-bold">{costForTwo}</p>
      </div>

      <p className="text-gray-600 mt-2">{deliveryTime} minutes delivery time</p>
    </div>
  );
};

export const withHighRating = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        {props.resData.info.avgRating >= 4.3 && (
          <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
            High Rating!
          </label>
        )}

        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withHighRating(RestaurantCard);
