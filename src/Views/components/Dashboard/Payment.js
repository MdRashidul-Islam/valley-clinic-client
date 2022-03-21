import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51K84IgEzVopus8oCtPl0mGu2K9SP3t8eveXXgIjd6nOacllgwSIvP93ok66XRu01yPq0eDJKCvrReIdaQ4R3XRdm00qJ0oOhTI"
);

const Payment = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [bookedAppointment, setBookedAppointment] = useState({});

  useEffect(() => {
    fetch(`https://mysterious-caverns-18186.herokuapp.com/appPayments/${id}`)
      .then((res) => res.json())
      .then((data) => setBookedAppointment(data));
  }, [id]);

  return (
    <PaymentStyled>
      <div className="payment-info">
        <h3>Name : {user.displayName}</h3>
        <h3>Email : {user.email}</h3>
        <h3>Phone : {bookedAppointment.number}</h3>
        <h3>Service : {bookedAppointment.title}</h3>
        <h3>Date : {bookedAppointment.date}</h3>
        <br />
        <h2>
          Pay - $ {bookedAppointment.price} for {bookedAppointment.title}
        </h2>

        <div className="payment">
          {bookedAppointment?.price && (
            <Elements stripe={stripePromise}>
              <CheckoutForm bookedAppointment={bookedAppointment} />
            </Elements>
          )}
        </div>
      </div>
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .payment-info {
    width: 60%;
    .payment {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export default Payment;
