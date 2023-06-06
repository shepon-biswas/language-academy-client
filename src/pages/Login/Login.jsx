import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="my-5">
            <h3 className="text-center text-3xl font-bold text-[#066466]">Please Login</h3>
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
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Enter Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="type password"
                  className="input input-bordered w-full border-[#066466] "
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>

              <input className="btn bg-[#066466] w-full my-3 text-white  hover:bg-white hover:text-[#066466] hover: border-2 border-[#066466]" type="submit" value={"Login"} />
            </form>
            <div>
                <span>Don't Have Account? <Link className="underline text-[#066466] font-semibold" to={"/registration"}>Register</Link></span>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
