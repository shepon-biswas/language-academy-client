import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const { createNewUser, updateUserInfo } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    const name = data.name;
    const confirmPassword = data.confirmPassword;

    // Validate Password field[one-specail char, one digit/number, one uppercase]
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Password: Please add at least one uppercase letter");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setErrorMessage("Password: Please add at least one number");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrorMessage("Password: Must Have One Special Character [#?!@$%^&*-]");
      return;
    } else if (password.length < 6) {
      setErrorMessage("Password must be 6 characters or more");
      return;
    }else if(password !== confirmPassword){
      console.log(password, confirmPassword);
        setErrorMessage("Password: Password doesn't matched!");
        return;
    }

    createNewUser(email, password)
      .then((res) => {
        setErrorMessage("");
        const newUser = res.user;
        // Update new user displayName & Photo URL
        updateUserInfo(newUser, name, photo)
          .then(() => {
            const savedUser = {name: data.name, email:data.email, image: data.photo, role:"student"}
              fetch('http://localhost:5000/users', {
                method: 'POST',
                headers:{
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(savedUser)
              })
              .then(res => res.json())
              .then(data =>{
                if(data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  })
                  .then(()=>{navigate("/")})
                }
              }) 
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => console.log(error));

    console.log(data);
  };

  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="my-5">
          <h3 className="text-center text-3xl font-bold text-[#066466]">
            Please Register
          </h3>
        </div>
        <div className="bg-gray-100 grid md:grid-cols-2 gap-8 p-8 rounded-md">
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/dWmvKnN/registration.jpg"
              alt="regsitration img"
            />
          </div>
          <div className="px-10 py-5 bg-white rounded-md shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full border-[#066466] "
                />
              </div>
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
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                    Enter Password
                  </span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="type password"
                  className="input input-bordered w-full border-[#066466] "
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <p className="text-red-600">{errorMessage}</p>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  placeholder="re-type password"
                  className="input input-bordered w-full border-[#066466] "
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">This field is required</span>
                )}
                <p className="text-red-600">{errorMessage}</p>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="link"
                  placeholder="paste photo url"
                  className="input input-bordered w-full border-[#066466] "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                    Select Gender
                  </span>
                </label>
                <select
                  {...register("gender")}
                  className="select select-bordered border-[#066466] w-full"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                    Your Phone Number
                  </span>
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="phone number"
                  className="input input-bordered w-full border-[#066466] "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Address</span>
                </label>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Street, House, Road, City"
                  className="input input-bordered w-full border-[#066466] "
                />
              </div>
              <input
                className="btn bg-[#066466] w-full my-3 text-white  hover:bg-white hover:text-[#066466] hover: border-2 border-[#066466]"
                type="submit"
                value={"Registration"}
              />
            </form>
            <div>
              <span>
                Already Have an Account?{" "}
                <Link
                  className="underline text-[#066466] font-semibold"
                  to={"/login"}
                >
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
