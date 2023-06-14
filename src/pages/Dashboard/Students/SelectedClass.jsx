import React from "react";
import useCart from "../../../hooks/useCart";
import { FaStripe, FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const { cart, refetch } = useCart();
  // console.log(cart);

  const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://fluent-language-academy-server.vercel.app/carts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
}


  return (
    <>
    <Helmet>
      <title>My Selected Classes | Fluent Language Academy</title>
    </Helmet>
      <h2 className="font-bold text-2xl text-[#066446] mb-10">My All Selected Classes</h2>
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
                      onClick={()=>handleDelete(cartInfo._id)}
                    title="Delete Class"
                    className="btn btn-sm text-white bg-red-600 hover:text-orange-500 me-2 "
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
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
