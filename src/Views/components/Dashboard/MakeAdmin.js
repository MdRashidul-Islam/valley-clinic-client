import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const { token } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const user = { email };
    fetch("https://mysterious-caverns-18186.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Make Admin successfully",
            showConfirmButton: false,
            timer: 800,
          });
        }
      });
  };

  return (
    <MakeAdminStyled>
      <div>
        <h1 style={{ color: "#6FCFCF" }}>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="ENTER AN EMAIL"
          />
          <button type="submit">Make Admin</button>
        </form>
      </div>
    </MakeAdminStyled>
  );
};

const MakeAdminStyled = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
  form {
    width: 400px;
    input {
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
      font-size: 18px;
      border: none;
      border-radius: 3px;
    }
    button {
      height: 40px;
      border: 1px solid #00a187;
      color: #00a187;
      font-weight: bold;
      width: 100%;
      &:hover {
        background-color: #00a187;
        color: white;
        transition: all 0.3s;
      }
    }
  }
`;

export default MakeAdmin;
