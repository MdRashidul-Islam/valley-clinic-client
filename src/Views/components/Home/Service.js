import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";
import BookingModal from "./BookingModal";

const Service = ({ service }) => {
  const { _id, img, price, time, schedule, title } = service;

  const { user } = useAuth();
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <ServiceStyled>
      <div className="service">
        <img src={img} alt="" />
        <div className="service_info">
          <h5>{title}</h5>
          <h5>Time: {time}</h5>
          <h5>Schedule: {schedule}</h5>
          <h4>Price: $ {price}</h4>
          <br />
          <Link to={`/service/${_id}`}>
            <button>Make Appointment</button>
          </Link>
        </div>
      </div>

      <BookingModal
        service={service}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      />
    </ServiceStyled>
  );
};

const ServiceStyled = styled.div`
  background: #00a187;
  width: 250px;
  height: 400px;
  overflow: hidden;
  color: white;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  &:hover {
    background: white;
    color: black;
    transition: 0.4s ease-in-out;
  }

  @media (max-width: 700px) {
    width: 100%;
    min-height: 420px;
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    height: 150px;
  }
  .service_info {
    padding: 10px;
    button {
      border: none;
      background: #2e3192;
      padding: 12px 28px;
      color: white;
      display: block;
      margin: 0 auto;
      text-align: center;
      font-size: 12px;
      margin-top: 60px;
      &:hover {
        background: #00a187;
        transition: 0.4s ease-in-out;
      }
    }
  }
`;

export default Service;
