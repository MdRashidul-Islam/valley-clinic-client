import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://morning-garden-34433.herokuapp.com/doctors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Doctor added successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  return (
    <AddDoctorStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", color: "#6FCFCF" }}>ADD DOCTOR</h3>
        <input
          {...register("name", { required: true })}
          placeholder="DOCTORS NAME"
        />
        <input
          {...register("qualification", { required: true })}
          placeholder="QUALIFICATION"
        />
        <input
          {...register("img", { required: true })}
          placeholder="DOCTORS IMAGE URL"
        />

        <input
          type="number"
          {...register("number", { required: true })}
          placeholder="DOCTORS NUMBER"
        />

        <textarea
          {...register("description", { required: true })}
          placeholder="DESCRIPTION"
        />

        <button type="submit">ADD DOCTOR</button>
      </form>
    </AddDoctorStyled>
  );
};

const AddDoctorStyled = styled.div`
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

export default AddDoctor;
