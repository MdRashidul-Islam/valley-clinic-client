import React from "react";
import styled from "styled-components";

const Department = ({ img, title, description }) => {
  return (
    <DepartmentStyled>
      <div className="department">
        <img src={img} alt="" />
        <br />
        <h5>{title}</h5>
        <br />
        <div className="hr">
          <hr />
        </div>
        <br />
        <p>{description}</p>
      </div>
    </DepartmentStyled>
  );
};

const DepartmentStyled = styled.div`
  .department {
    background: #00a187;
    height: 400px;
    padding: 10px;
    color: white;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    .hr {
      width: 100px;
      margin: 0 auto;
    }
    img {
      display: block;
      margin: 0 auto;
    }
    h3 {
      text-align: center;
    }
    p {
      font-size: 12px;
    }
    text-align: justify;
  }
`;

export default Department;
