import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { MainLayout } from "../../../styles/Layout";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    data.time = service.time;
    data.schedule = service.schedule;
    data.email = user.email;
    data.name = user.displayName;
    data.title = service.title;
    data.price = service.price;

    fetch("http://localhost:4000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Make appointment successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:4000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <SingleServiceStyled>
      <MainLayout>
        <div className="container">
          <div className="left">
            <div>
              <img src={service.img} alt="" /> <br />
              <h1>{service.title}</h1> <br />
              <h3>Price: {service.price}</h3> <br />
              <h3>Schedule: {service.schedule}</h3> <br />
              <h3>Time: {service.time}</h3>
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                disabled
                {...register("name")}
                defaultValue={user?.displayName}
              />
              <input
                disabled
                {...register("email")}
                defaultValue={user?.email}
              />
              <input
                disabled
                {...register("title")}
                defaultValue={service?.title}
              />
              <input
                disabled
                {...register("price")}
                defaultValue={service.price}
              />
              <input
                disabled
                {...register("schedule")}
                defaultValue={service?.schedule}
              />
              <input
                required
                {...register("date")}
                type="date"
                placeholder="Date"
              />

              <input
                type="number"
                {...register("number")}
                placeholder="Phone"
                required
              />
              <input
                className="button"
                type="submit"
                value=" Make Appointment"
              />
            </form>
          </div>
        </div>
      </MainLayout>
    </SingleServiceStyled>
  );
};

const SingleServiceStyled = styled.div`
  margin-top: 70px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .left {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 400px;
        border-radius: 10px;
      }
      @media (max-width: 700px) {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
      }
    }
    .right {
      width: 50%;
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          width: 400px;
          height: 40px;
          margin-bottom: 10px;
          padding-left: 4px;
          font-size: 14px;
        }
        .button {
          border: 1px solid #00a187;
          color: #00a187;
          font-weight: bold;
          &:hover {
            background: #00a187;
            color: white;
            transition: 0.4s ease-in-out;
          }
        }
      }
      @media (max-width: 700px) {
        width: 100%;
        form {
          input {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default ServiceDetails;
