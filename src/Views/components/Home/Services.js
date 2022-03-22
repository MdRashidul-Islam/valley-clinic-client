import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainLayout } from "../../../styles/Layout";
import Spinner from "../custom/Spinner";
import Service from "./Service";
import Fade from "react-reveal/Fade";

const Services = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      `https://mysterious-caverns-18186.herokuapp.com/services?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        setServices(data.services);
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  console.log(services);

  return (
    <ServicesStyled>
      <MainLayout>
        <h1>Services</h1>
        <Fade left>
          <div className="services">
            {services.length ? (
              services?.map((service) => (
                <Service key={service._id} service={service} />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </Fade>
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : " "}
              key={number}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </MainLayout>
    </ServicesStyled>
  );
};

const ServicesStyled = styled.div`
  height: 600px;
  @media (max-width: 700px) {
    height: 100%;
  }
  h1 {
    text-align: center;
    padding-bottom: 20px;
    color: #00a187;
  }
  .services {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 700px) {
      min-height: 888px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .pagination {
    text-align: center;
    padding: 10px;
    button {
      padding: 5px 5px;
      margin: 5px;
      border: 1px solid #00a187;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover {
        background-color: #00a187;
        transition: 0.4s ease-in-out;
        color: white;
      }
    }
    .selected {
      background: #00a187;
      color: white;
    }
  }
`;

export default Services;
