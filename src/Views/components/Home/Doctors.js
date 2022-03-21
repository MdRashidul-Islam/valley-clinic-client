import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainLayout } from "../../../styles/Layout";
import Doctor from "./Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  console.log(doctors);

  useEffect(() => {
    fetch("http://localhost:4000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <DoctorsStyled>
      <MainLayout>
        <div className="doctors">
          <div className="left">
            <h3>
              OVER 100 MULTI-DISCIPLINARY <br /> SPECIALISTS
            </h3>{" "}
            <br />
            <p>
              State of the art technology and expertise combined with the
              support of our friendly staff, we strive each day to be the top
              healthcare provider, not only in Bangladesh but within the
              Asia-Pacific region.
            </p>{" "}
            <br />
            <button>MEET OUR CONSULTANTS</button>
          </div>
          <div className="right">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {doctors?.map((dr) => (
                <SwiperSlide key={dr._id}>
                  <Doctor
                    img={`${dr.img}`}
                    name={`${dr.name}`}
                    education={`${dr.qualification}`}
                    specialists={`${dr.description?.slice(0, 100)}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </MainLayout>
    </DoctorsStyled>
  );
};

const DoctorsStyled = styled.div`
  background: white;

  .doctors {
    display: flex;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
    .left {
      width: 30%;
      padding: 20px;
      h3 {
        font-size: 20px;
        color: #00797f;
      }
      p {
        font-size: 14px;
        text-align: justify;
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
        padding: 0px;
      }
    }
    .right {
      width: 70%;
      padding: 20px 10px;
      display: flex;
      border-bottom: 1px solid lightgray;
      @media (max-width: 700px) {
        width: 100%;
        padding: 0px;
        border-bottom: 0px solid lightgray;
        margin-top: 20px;
      }
    }
  }
`;

export default Doctors;
