import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../../styles/Layout";

const Mission = () => {
  return (
    <MissionStyled>
      <MainLayout>
        <div className="mission">
          <div className="first">
            <h1>WELCOME TO Valley</h1>
            <hr />
            <br />
            <p>
              Bangladesh Specialized Hospital has all the characteristics of a
              world-class hospital with wide range of services and specialists,
              equipments and technology, ambience and service quality. The
              hospital is a showcase of synergy of medical technology and
              advances in ICT through paperless medical records. The skilled
              nurses, technologists and administrators of Bangladesh Specialized
              Hospital.......{" "}
            </p>
          </div>
          <div className="second">
            <img
              src="http://www.bdspecializedhospital.com/storage/app/public/media/1558419866.png"
              alt=""
            />
          </div>
          <div className="third">
            <h3>OUR MISSION</h3>
            <p>We are dedicated to meeting the needs of:</p>
            <p>Our patient : excellent and cost-effective healthcare</p>
            <p>Our staff : continuing development and welfare</p>
            <p>Our nation : partnership in promoting health in Bangladesh.</p>

            <h3>OUR VISION</h3>
            <p>
              "To be a renowned organization at the leading edge of Medicine,
              providing quality healthcare to meet our nation's aspirations."
            </p>
          </div>
        </div>
      </MainLayout>
    </MissionStyled>
  );
};

const MissionStyled = styled.div`
  background: white;

  @media (max-width: 700px) {
    height: 100%;
  }
  .mission {
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    text-align: justify;
    align-items: center;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: justify;
      align-items: center;
    }

    .first {
      width: 33%;
      padding: 20px;
      h1 {
        color: #00a187;
      }

      p {
        font-size: 15px;
        color: #676767;
      }
      @media (max-width: 700px) {
        width: 100%;
        padding: 0px;
      }
    }
    .second {
      width: 30%;
      img {
        width: 450px;
        object-fit: contain;
      }
      @media (max-width: 700px) {
        width: 100%;
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
    .third {
      width: 30%;
      padding: 20px;
      p {
        font-size: 15px;
        color: #676767;
      }
      @media (max-width: 700px) {
        width: 100%;
        padding: 0px;
      }
    }
  }
`;

export default Mission;
