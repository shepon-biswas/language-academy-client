import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_secret = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddClasses = () => {
  const [axiosSecure] = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_secret}`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.ClassImage[0]);
    // console.log(data.ClassImage[0])

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
      // mode: 'no-cors'
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        // console.log(imageResponse);
        if(imageResponse.success){
          const imageUrl = imageResponse.data.display_url;
          console.log(imageUrl);
          const {className, classImage, instructorName, instructorEmail, price,seats} = data;
          // classes.image = imageUrl;
          const newClassData = {className, classImage:imageUrl, instructorName, instructorEmail, price:parseInt(price),seats:parseInt(seats)}
          console.log(newClassData)
          axiosSecure.post('/classes', {...newClassData, status: "pending"})
          .then(data =>{
            // console.log("after insert", data.data)
            if(data.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Class Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })

        }
      });
  };

  return (
    <>
      <div className=" w-10/12 px-10 py-5 bg-white rounded-md shadow-lg">
        <h2 className="text-center font-bold text-2xl text-[#066466]">
          Add A Class
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              {...register("className")}
              type="text"
              placeholder="Learn Chinese..."
              className="input input-bordered w-full border-[#066466] "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class Image</span>
            </label>
            <input
              {...register("ClassImage", { required: true })}
              type="file"
              className="file-input file-input-bordered border-[#066466] file-input-accent w-full"
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              {...register("instructorName" , { required: true })}
              defaultValue={user?.displayName}
              // value={user?.displayName}
              readOnly
              type="text"
              placeholder=""
              className="input input-bordered w-full border-[#066466] "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              {...register("instructorEmail" , { required: true })}
              defaultValue={user?.email}
              // value={user?.email}
              readOnly
              type="email"
              placeholder=""
              className="input input-bordered w-full border-[#066466] "
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Seats
                </span>
              </label>
              <input
                {...register("seats")}
                type="text"
                placeholder="Available Seats"
                className="input input-bordered w-full border-[#066466] "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Class Price</span>
              </label>
              <input
                {...register("price")}
                type="text"
                placeholder="$120"
                className="input input-bordered w-full border-[#066466] "
              />
            </div>
          </div>
          <input
            className="btn bg-[#066466] w-full my-3 text-white  hover:bg-white hover:text-[#066466] hover: border-2 border-[#066466]"
            type="submit"
            value={"Add A Class"}
          />
        </form>
      </div>
    </>
  );
};

export default AddClasses;
