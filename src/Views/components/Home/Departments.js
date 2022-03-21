import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import Department from "./Department";
import { MainLayout } from "../../../styles/Layout";

const Departments = () => {
  return (
    <DepartmentsStyled>
      <MainLayout>
        <h1>Departments</h1>
        <div className="slider">
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
              <Department
                img={
                  "https://www.bdspecializedhospital.com/storage/app/public/media/1557644647.png"
                }
                title={"HEPATOBILIARY & PANCREATIC SURGERY DEPARTMENT"}
                description={
                  "The Department of Cardiology provides a broad range of services in the diagnosis and management of heart disease. The department comprises a strong team of doctors from various cardiac sub-specialties to treat all types of heart disease."
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <Department
                img={
                  "https://www.bdspecializedhospital.com/storage/app/public/media/1556174961.png"
                }
                title={"CARDIOLOGY DEPARTMENT"}
                description={
                  "The Department of Cardiology provides a broad range of services in the diagnosis and management of heart disease. The department comprises a strong team of doctors from various cardiac sub-specialties to treat all types of heart disease."
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <Department
                img={
                  "https://www.bdspecializedhospital.com/storage/app/public/media/1557639870.png"
                }
                title={"GENERAL & LAPAROSCOPIC SURGERY DEPARTMENT"}
                description={
                  "The Department of General & Laparoscopic Surgery at BSHL is committed to providing medical students, residents and fellows with a wide array of surgical training including open general surgery procedures in the treatment of morbid obesity,"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <Department
                img={
                  "https://www.bdspecializedhospital.com/storage/app/public/media/1557639881.png"
                }
                title={"PLASTIC & AESTHETIC SURGERY DEPARTMENT"}
                description={
                  "Department of Plastic, Reconstructive & Cosmetic Surgery of Bangladesh Specialized Hospital provides exceptional and extensive services to its patients in several aspects of Plastic Surgery. "
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <Department
                img={
                  "https://www.bdspecializedhospital.com/storage/app/public/media/1557639896.png"
                }
                title={"UROLOGY DEPARTMENT"}
                description={
                  "The Department of Urology at Bangladesh Specialized Hospital is dedicated to providing state-of-the-art medical and surgical care for all specialties of male and female urology (both adult and pediatric), as well as male infertility problems. Each year."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </MainLayout>
    </DepartmentsStyled>
  );
};

const DepartmentsStyled = styled.div`
  @media (max-width: 700px) {
    height: 100%;
  }
  h1 {
    text-align: center;
    color: #00a187;
    padding: 20px;
  }
  height: 80vh;
  .slider {
    height: 60vh;
  }
`;

export default Departments;
