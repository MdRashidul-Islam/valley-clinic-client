import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [name, setName] = React.useState(user.displayName);
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = React.useState(user.email);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [value, setValue] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("occupation", occupation);
    formData.append("message", message);
    formData.append("image", image);
    formData.append("value", value);

    fetch("https://mysterious-caverns-18186.herokuapp.com/reviews", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: `Add Review Successfully`,
          showConfirmButton: false,
          timer: 1000,
        });
        // console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ReviewStyled>
      <div className="review_section">
        <h3 style={{ textAlign: "center", color: "#13D0D6" }}>
          POST YOUR FEEDBACK
        </h3>
        <form onSubmit={onSubmit} className="form">
          <input
            name="name"
            readOnly
            value={user.displayName || ""}
            onBlur={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
          <input
            name="email"
            readOnly
            value={user.email || ""}
            onBlur={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your Email"
          />
          <input
            name="occupation"
            onBlur={(e) => setOccupation(e.target.value)}
            type="text"
            placeholder="Your Occupation"
          />

          <textarea
            onBlur={(e) => setMessage(e.target.value)}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <Typography component="legend">Give us rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <hr />
          <br />
          <input
            onBlur={(e) => setImage(e.target.files[0])}
            accept="image/png, image/jpg"
            type="file"
          />
          <div className="button">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    </ReviewStyled>
  );
};

const ReviewStyled = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 688px) {
    height: 100%;
    width: 100%;
    display: block;
  }

  .review_section {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    .form {
      width: 350px;
      @media (max-width: 688px) {
        width: 100%;
      }
      input {
        display: block;
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        border: none;
        border-radius: 3px;
        padding: 3px;
      }
      textarea {
        width: 100%;
        border: none;
        border-radius: 3px;
        padding: 3px;
        height: 120px;
      }
    }
    .button {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

export default Review;
