import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";


const UpdateClasses = () => {
  
    const data = useLoaderData();
    // console.log(data)
    const {className, price, seats} = data;
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
        console.log(data)
      }

      useEffect(()=>{
        setValue("className", className);
        setValue("price", price);
        setValue("seats", seats);
      }, [data])
  return (
    <>
      <div>
        <h2 className="text-[#066446] text-2xl font-bold">Update Class Information </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              {...register("className")}
              defaultValue={className}
              type="text"
              placeholder="Learn Chinese..."
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
                defaultValue={seats}
                type="number"
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
                defaultValue={price}
                type="number"
                placeholder="$120"
                className="input input-bordered w-full border-[#066466] "
              />
            </div>
          </div>
          <input
            className="btn bg-[#066466] w-full my-3 text-white  hover:bg-white hover:text-[#066466] hover: border-2 border-[#066466]"
            type="submit"
            value={"Update Information"}
          />
        </form>
      </div>
    </>
  );
};

export default UpdateClasses;
