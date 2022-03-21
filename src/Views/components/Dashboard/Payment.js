import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";

const stripePromise = loadStripe(
  "pk_test_51K84IgEzVopus8oCtPl0mGu2K9SP3t8eveXXgIjd6nOacllgwSIvP93ok66XRu01yPq0eDJKCvrReIdaQ4R3XRdm00qJ0oOhTI"
);

const Payment = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [bookedAppointment, setBookedAppointment] = useState({});

  useEffect(() => {
    fetch(`https://morning-garden-34433.herokuapp.com/appointment/${id}`)
      .then((res) => res.json())
      .then((data) => setBookedAppointment(data));
  }, [id]);

  return (
    <PaymentStyled>
      <div className="payment-info">
        <h3>Name : {user.displayName}</h3>
        <h3>Email : {user.email}</h3>
        <h3>Phone : {bookedAppointment.phone}</h3>
        <h3>Service : {bookedAppointment.serviceName}</h3>
        <h3>Date : {bookedAppointment.date}</h3>
        <br />
        <h2>
          Pay - $ {bookedAppointment.price} for {bookedAppointment.serviceName}
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
    .payment {
      margin-top: 30px;
    }
  }
`;

export default Payment;
