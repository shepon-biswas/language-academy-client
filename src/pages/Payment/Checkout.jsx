import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";
import { useLoaderData, useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
console.log(import.meta.env.VITE_PAYMENT_KEY)

const Checkout = () => {
  const data = useLoaderData();
  const {price} = data;
  // console.log(price)



  return (
    <>
      <Helmet>
        <title>Checkout | Fluent Language Academy</title>
      </Helmet>
      <h2 className="text-xl">Please Pay <span className="text-[#066466] font-bold">${price}</span></h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </>
  );
};

export default Checkout;
