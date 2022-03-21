import React from "react";
import styled from "styled-components";
import bg from "../../../assets/img/footer_bg.png";

const Footer = () => {
  const background = {
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "430px",
    width: "100%",
  };
  return (
    <FooterStyled style={background}>
      <div className="footer">
        <div className="top">
          <div className="left">
            <div className="first">
              <h1>Contact Us</h1> <br />
              <h6>Emmett, Idaho</h6> <br />
              <h6>New Plymouth, Idaho</h6> <br />
              <h6>Payette, Idaho (Medical)</h6> <br />
              <h6>Payette, Idaho (Dental)</h6> <br />
            </div>
            <div className="second">
              <h6>Nyssa, Oregon (Medical)</h6>
              <h6>Nyssa, Oregon (Dental)</h6>
              <h6>Ontario, Oregon</h6>
              <h6>Vale, Oregon</h6>
            </div>
          </div>
          <div className="right">
            <h1>For Your Upcoming Visit</h1>
            <br />
            <h6>
              Arrive 15 minutes early to fill out a registration card for the
              new year.
            </h6>
            <h6>Bring your insurance card.</h6>
            <h6>Bring all of the current medications you are taking.</h6>
            <h6>
              f applying for our sliding fee scale payment option, please bring
              current pay stub or tax information for income verification.
            </h6>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  color: white;

  .footer {
    background: #007967;
    .top {
      display: flex;
      height: 300px;
      align-items: center;
      justify-content: center;
      @media (max-width: 700px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .left {
        display: flex;
        flex: 0.9;
        height: 100px;
        align-items: center;
        @media (max-width: 700px) {
          display: flex;
          flex-direction: column;
          flex: 2;
        }
        .second {
          h6 {
            margin-bottom: 5px;
          }
        }
      }
      .right {
        height: 230px;
        @media (max-width: 700px) {
          h1 {
            font-size: 26px;
          }
        }
      }
    }
  }
`;

export default Footer;
