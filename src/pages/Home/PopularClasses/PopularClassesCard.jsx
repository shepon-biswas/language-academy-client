import React, { useContext } from "react";
import { FaDollarSign, FaPlusCircle, FaUserTie, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PopularClassesCard = ({ classData }) => {
    const {_id, className, instructorName, classImage, price} = classData;
    // const {user} = useContext(AuthContext);
    // const naviagte = useNavigate();

    // const handleSelect =(classData)=>{
    //     // console.log(classData);
    //     if(user && user.email){
    //         const cartItem = {classId: _id, name:className, image:classImage, price, email: user.email }
    //         // console.log(cartItem);
    //         fetch(`http://localhost:5000/carts`, {
    //             method:"POST",
    //             headers:{
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(cartItem)
    //         })
    //         .then(res => {
    //             res.json()
    //             console.log(res)
    //         })
    //         .then(data =>{
    //             console.log(data);
    //             if(data.insertedId){
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Class Added to the cart successfully!',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                   })
    //             }
    //         })
    //     }else{
    //         Swal.fire({
    //             title: 'Please Login to Adda a class!',
    //             text: "You won't be able to revert this!",
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Yes, LOGIN'
    //           }).then((result) => {
    //             if (result.isConfirmed) {
    //                 naviagte("/login")
    //             }
    //           })
    //     }
        
    // }
    
  return (
    <>
      <div className="card md:w-96 bg-base-100 shadow-xl mb-5">
        <figure>
          <img
            className="w-full h-[250px] object-cover"
            src={classImage}
            alt="Class Image"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl">{className}</h2>
          <span className="inline-flex items-center gap-3 font-bold">
            <FaUserTie></FaUserTie> Instructor: {instructorName}
          </span>
          <div>
            <div>
              <span className="inline-flex items-center gap-3 font-bold">
                <FaUsers></FaUsers>Available Seats:
              </span>
            </div>
            <div>
              <span className="inline-flex items-center gap-3 font-bold bg-[#066466] text-white px-2 py-1 my-1 rounded">
                <FaDollarSign></FaDollarSign> Price: {price}
              </span>
            </div>
          </div>
          {/* <div className="card-actions ">
            <button 
            className="btn bg-[#066466] hover:bg-[#005758] w-full text-white">
              Select
              <FaPlusCircle className="w-5 h-5"></FaPlusCircle>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PopularClassesCard;
