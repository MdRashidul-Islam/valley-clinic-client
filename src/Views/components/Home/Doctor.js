import React from "react";
import styled from "styled-components";

const Doctor = ({ img, name, education, specialists }) => {
  return (
    <DoctorStyled>
      <div className="doctor">
        <img src={img} alt="" />
        <div className="info">
          <h6>{name}</h6>
          <p>{education}</p>
          <p>{specialists.slice(0, 100)}</p>
          {/* <button>See More</button> */}
        </div>
      </div>
    </DoctorStyled>
  );
};

const DoctorStyled = styled.div`
  .doctor {
    width: 240px;
    border-right: 1px solid lightgray;
    img {
      width: 250px;
      height: 250px;
      object-fit: contain;
      @media (max-width: 700px) {
        width: 100%;
        object-fit: contain;
      }
    }
    .info {
      h6 {
        font-size: 16px;
      }
      padding: 10px;
      text-align: justify;
      font-size: 12px;
      button {
        display: block;
        margin: 0 auto;
        padding: 0 20px;
        margin-top: 10px;
        border: 1px solid #00a187;
        &:hover {
          background-color: #00a187;
          color: white;
          transition: all 0.3s;
        }
      }
    }

    @media (max-width: 700px) {
      border: 1px solid lightgray;
      width: 100%;
      min-height: 50vh;
    }
  }
`;

export default Doctor;
