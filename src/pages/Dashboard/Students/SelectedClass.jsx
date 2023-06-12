import React from "react";
import useCart from "../../../hooks/useCart";
import { FaCcStripe, FaStripe, FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const { cart } = useCart();
  // console.log(cart);
  return (
    <>
    <Helmet>
      <title>My Selected Classes | Fluent Language Academy</title>
    </Helmet>
      <h2>Hello All Cart{cart.length}</h2>
      {/* Cart Items */}
      <div className="overflow-x-auto w-11/12 ">
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-bold text-xl">
            <tr className="text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cart.map((cartInfo, index) => (
              <tr key={cartInfo._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cartInfo.image} alt="User Image" />
                    </div>
                  </div>
                </td>
                <td>{cartInfo.name}</td>
                <td>{cartInfo.price}</td>
                <td>
                <button
                    //   onClick={()=>handleMakeAdmin(user)}
                    title="Make Admin"
                    className="btn btn-sm text-white bg-red-600 hover:text-orange-500 me-2 "
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
                {/* <button
                      // onClick={()=>dashboard/checkout(cartInfo._id)}
                    title="Make Admin"
                    className="btn btn-sm text-white bg-[#066446] hover:text-orange-500 me-2 "
                  >
                    <Link> </Link>
                   PAY <FaStripe></FaStripe>
                  </button> */}
                  <button>
                    <Link to={`/dashboard/checkout/${cartInfo._id}`} className="btn btn-sm text-white bg-[#066446] hover:text-orange-500 me-2">
                      <FaStripe></FaStripe> Pay
                    </Link>
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SelectedClass;
