import { useContext, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { axiosInstance } from "../config";
import { Context } from "../context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center bg-cover bg-[url('https://images.unsplash.com/photo-1581712075036-2584cb8a3644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80')]  ">
        <div className="w-[60%] p-5 bg-white mx-auto rounded-3xl">
          <h1 className="text-2xl font-bold mx-5">Log In</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-wrap mt-5"
          >
            <input
              className="flex-1 min-w-[40%] mx-5 my-2 p-2 border"
              placeholder="username"
              ref={userRef}
            ></input>
            <input
              className="flex-1 min-w-[40%] mx-5 my-2 p-2 border"
              placeholder="password"
              ref={passwordRef}
            ></input>
            <button
              type="submit"
              disabled={isFetching}
              className=" bg-teal-500 text-white rounded-lg my-5 w-[40%] font-medium mx-auto py-3 hover:bg-teal-800 duration-200"
            >
              Login
            </button>
            <div className="mx-5">
              Do you remember your password?{" "}
              <Link className="link" to="/register">
                <span className="font-semibold underline cursor-pointer ml-2">
                  Create Account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
