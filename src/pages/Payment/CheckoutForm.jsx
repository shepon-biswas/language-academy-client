import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = ({ data, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [tranjectionId, setTranjectionId] = useState("");


  useEffect(() => {
    axiosSecure.post(`/create-payment-intent`, { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async(event)=>{
    event.preventDefault();

    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement);
    if(card === null){
        return;
    }
    // console.log(card)
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,

    })
    if(error){
        // console.log(error)
        setCardError(error.message)
    }else{
        console.log("payment Method", paymentMethod)
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || "unknown",
                    name: user?.displayName || "unknown"
                },
            },
        },
    );
    if(confirmError){
        console.log(confirmError);
    }
    console.log(paymentIntent);
    if (paymentIntent.status === 'succeeded') {
      setTranjectionId(paymentIntent.id);


      // save payment information to the database
      const payment = {
          email: user?.email,
          date: new Date(),
          tranjectionId: paymentIntent.id,
          price,
          cartClassId: data?._id,
          classId: data?.classId,
          enrolled_student: data?.enrolled_student,
          seats: data?.seats,
          name: data?.name
      }
      axiosSecure.post('/payments', payment)
          .then(res => {
              console.log(res.data);
              if (res.data.insertResult.insertedId) {
                  Swal.fire({
                      icon: 'success',
                      title: `Seccessfully Enrolled ${data?.name}`,
                      showConfirmButton: false,
                      timer: 1500
                  })
              }
          })
  }
}

  return (
    <>
      <div className="w-8/12">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="bg-[#066466] text-white px-4 py-1 rounded mt-3"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="font-bold text-red-500">{cardError}</p>}
      </div>
    </>
  );
};

export default CheckoutForm;
