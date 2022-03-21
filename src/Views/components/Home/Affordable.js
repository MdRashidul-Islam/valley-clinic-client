import React from "react";
import styled from "styled-components";
import img from "../../../assets/img/family.jpg";
import { MainLayout } from "../../../styles/Layout";

const Affordable = () => {
  return (
    <AffordableStyled>
      <MainLayout>
        <div className="main">
          <div className="left">
            <h1>Affordable to Everyone</h1> <br />
            <p>
              We accept all patients regardless of their insurance status or
              their ability to pay. We accept most medical and dental insurance
              plans including Medicare and Medicaid, and we offer a sliding fee
              scale payment option on all of our services. Please ask one of our
              helpful receptionists if you qualify for our sliding, discounted
              fee and about our prescription drug assistance program.
            </p>{" "}
            <br /> <br />
            <h3 style={{ color: "#555555" }}>
              VFHC is a Federally Qualified Health Center (FQHC).
            </h3>{" "}
            <br />
            <button>Learn More</button>
          </div>
          <div className="right">
            <img src={img} alt="" />
          </div>
        </div>
      </MainLayout>
    </AffordableStyled>
  );
};

const AffordableStyled = styled.div`
  background: white;
  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .left {
      width: 50%;
      padding: 0px 20px;
      text-align: justify;
      h1 {
        color: #007967;
        font-size: 40px;
        font-weight: 600;
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
      @media (max-width: 700px) {
        width: 100%;
        padding: 0px 1px;
        margin-bottom: 20px;
        h1 {
          font-size: 26px;
        }
      }
    }
    .right {
      width: 50%;
      padding: 20px;
      @media (max-width: 700px) {
        width: 100%;
        padding: 0px;
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;

export default Affordable;
