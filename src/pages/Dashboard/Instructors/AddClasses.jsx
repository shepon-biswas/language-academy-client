import React from 'react';
import { useForm } from "react-hook-form";

const AddClasses = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {console.log(data)}

    return (
        <>

        <div className=" w-10/12 px-10 py-5 bg-white rounded-md shadow-lg">
           <h2 className='text-center font-bold text-2xl text-[#066466]'>Add A Class</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
             {/* register your input into the hook by invoking the "register" function */}
             <div className="form-control w-full">
               <label className="label">
                 <span className="label-text font-semibold">Class Name</span>
               </label>
               <input
                 {...register("class-name")}
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
                 {...register("class-image", { required: true })}
                 type="file"
                 placeholder=""
                 className="input input-bordered w-full border-[#066466] "
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
                 {...register("instructor-name", { required: true })}
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
                 {...register("instructor-email", { required: true })}
                 type="email"
                 placeholder=""
                 className="input input-bordered w-full border-[#066466] "
               />
             </div>
             <div className="form-control w-full">
               <label className="label">
                 <span className="label-text font-semibold">
                   Select Status
                 </span>
               </label>
               <select
                 {...register("status")}
                 className="select select-bordered border-[#066466] w-full"
               >
                 <option value="female">Pending</option>
                 <option value="male">Approved</option>
                 <option value="other">Denied</option>
               </select>
             </div>
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