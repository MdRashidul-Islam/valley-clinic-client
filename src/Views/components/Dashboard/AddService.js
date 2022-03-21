import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://morning-garden-34433.herokuapp.com/availableAppointments", {
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
            position: "center",
            icon: "success",
            title: "Service Added Successfully",
            showConfirmButton: false,
            timer: 1300,
          });
        }
      });
  };
  return (
    <AddServiceStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", color: "#6FCFCF" }}>ADD SERVICE</h3>
        <input
          {...register("serviceName", { required: true })}
          placeholder="SERVICE NAME"
        />
        <input
          {...register("schedule", { required: true })}
          placeholder="SCHEDULE/TIME/ 3:00PM - 4:00PM"
        />

        <input
          {...register("space", { required: true })}
          placeholder="AVAILABLE SPACE"
        />

        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="SERVICE PRICE"
        />

        <button type="submit">ADD SERVICE</button>
      </form>
    </AddServiceStyled>
  );
};

const AddServiceStyled = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 3px;
    input {
      height: 40px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: none;
    }
    textarea {
      height: 120px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: none;
    }
  }
`;

export default AddService;
