import ErrorImg from "../images/ErrorImg.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  const err = useRouteError();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <img src={ErrorImg} alt="Error Image" className="mb-8 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! The restaurant you're looking for can't be found.
        </h1>
        <h3 className="text-lg text-gray-600 mb-6">{err.data}</h3>
        <div>
          <button className="px-6 py-4 bg-black text-white rounded-lg shadow-md">
            <Link to="/" className="text-white">
              Back Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
