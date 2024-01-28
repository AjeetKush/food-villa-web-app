import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required")
    .email("Enter Valid Email"),
  password: Yup.string()
    .required("Password is a required")
    .min(8, "Password must be 8 characters long"),
});

const Login = () => {
  const navigate = useNavigate();
  const [getLocalStorage, setLocalStorage] = useLocalStorage("user");

  useEffect(() => {
    if (getLocalStorage?.token?.length === 100) {
      navigate(-1);
    }
  }, []);

  function handleNavigate(values) {
    let index = values?.email.indexOf("@");
    let name = values?.email.slice(0, index);

    const genRandomStringNthChar = () => {
      return [...Array(100)].map(() => Math.random().toString(36)[2]).join("");
    };

    setLocalStorage({
      ...getLocalStorage,
      userName: name,
      token: genRandomStringNthChar(),
    });
    navigate(-1);
  }

  if (getLocalStorage?.token?.length === 100) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleNavigate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="w-full max-w-md">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl mb-6 text-center text-indigo-600">
                Login
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-input border border-black p-2 rounded-lg"
                  id="email"
                />
                <p className="text-red-500 text-xs italic">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-input border border-black p-2 rounded-lg"
                />
                <p className="text-red-500 text-xs italic">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
