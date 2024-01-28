import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                : ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <button
              className="p-2 mx-20 rounded-lg bg-white shadow-lg absolute text-green-400 hover:shadow-lg shadow-gray-100"
              onClick={() => handleAddItem(item)}
            >
              {" "}
              ADD +{" "}
            </button>
            <img src={CDN_URL + item.card.info.imageId} alt="🎃🍛" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
