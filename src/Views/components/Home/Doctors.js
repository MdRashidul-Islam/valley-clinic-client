import styled from "styled-components";
import Doctor from "./Doctor";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Department from "./Department";
import { MainLayout } from "../../../styles/Layout";

const Doctors = () => {
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
              <SwiperSlide>
                <Doctor
                  img={
                    "https://www.bdspecializedhospital.com/storage/app/public/media/1557730926.jpg"
                  }
                  name={"DR. RASHIDUL ISLAM"}
                  education={
                    " MBBS, DEM Diploma in Endocrinology & Metabolism, MD Endocrinology & Metabolism"
                  }
                  specialists={
                    "He is serving as a Senior Consultant Surgeon in United Hospital since   mid 2015 till date"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Doctor
                  img={
                    "https://www.bdspecializedhospital.com/storage/app/public/media/1557730926.jpg"
                  }
                  name={"DR. RASHIDUL ISLAM"}
                  education={
                    " MBBS, DEM Diploma in Endocrinology & Metabolism, MD Endocrinology & Metabolism"
                  }
                  specialists={
                    "He is serving as a Senior Consultant Surgeon in United Hospital since   mid 2015 till date"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Doctor
                  img={
                    "https://www.bdspecializedhospital.com/storage/app/public/media/1557730926.jpg"
                  }
                  name={"DR. RASHIDUL ISLAM"}
                  education={
                    " MBBS, DEM Diploma in Endocrinology & Metabolism, MD Endocrinology & Metabolism"
                  }
                  specialists={
                    "He is serving as a Senior Consultant Surgeon in United Hospital since   mid 2015 till date"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Doctor
                  img={
                    "https://www.bdspecializedhospital.com/storage/app/public/media/1557730926.jpg"
                  }
                  name={"DR. RASHIDUL ISLAM"}
                  education={
                    " MBBS, DEM Diploma in Endocrinology & Metabolism, MD Endocrinology & Metabolism"
                  }
                  specialists={
                    "He is serving as a Senior Consultant Surgeon in United Hospital since   mid 2015 till date"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Doctor
                  img={
                    "https://www.bdspecializedhospital.com/storage/app/public/media/1557730926.jpg"
                  }
                  name={"DR. RASHIDUL ISLAM"}
                  education={
                    " MBBS, DEM Diploma in Endocrinology & Metabolism, MD Endocrinology & Metabolism"
                  }
                  specialists={
                    "He is serving as a Senior Consultant Surgeon in United Hospital since   mid 2015 till date"
                  }
                />
              </SwiperSlide>
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
