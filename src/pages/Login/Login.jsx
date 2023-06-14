import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  // Password visible/Hide Code goes here
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  // React hook form
  const navigate = useNavigate();
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  //   Google Sign in Method
  const handleGoogleSignIn = () =>
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(user);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
          role: "student",
        };
        fetch("https://fluent-language-academy-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Login Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          });
      })
      .catch((error) => {
        console.error(error);
      });

  return (
    <>
      <Helmet>
        <title>Login | Fluent Language Academy</title>
      </Helmet>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="my-5">
          <h3 className="text-center text-3xl font-bold text-[#066466]">
            Please Login
          </h3>
        </div>
        <div className="bg-gray-100 grid md:grid-cols-2 gap-8 p-8 rounded-md">
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/BBKbXh8/login.jpg"
              alt="login image"
            />
          </div>
          <div className="px-10 py-5 bg-white rounded-md shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full border-[#066466] "
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text font-semibold">
                    Enter Password
                  </span>
                </label>
                <div className="flex items-center relative">
                  <input
                    {...register("password", { required: true })}
                    type={visible ? "text" : "password"}
                    placeholder="type password"
                    className="input input-bordered w-full border-[#066466] "
                  />
                  <div
                  onClick={() => setVisible(!visible)}
                  className="absolute right-5 cursor-pointer"
                >
                  {visible ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </div>
                </div>
                

                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <p className="text-red-600">{error}</p>
              </div>

              <input
                className="btn bg-[#066466] w-full my-3 text-white  hover:bg-white hover:text-[#066466] hover: border-2 border-[#066466]"
                type="submit"
                value={"Login"}
              />
            </form>
            <div>
              <span>
                Don't Have Account?{" "}
                <Link
                  className="underline text-[#066466] font-semibold"
                  to={"/registration"}
                >
                  Register
                </Link>
              </span>
            </div>
            <SocialLogin handleGoogleSignIn={handleGoogleSignIn}></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
