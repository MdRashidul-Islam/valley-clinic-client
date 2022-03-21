import { css } from "@emotion/react";
import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  let [color, setColor] = useState("#1CC7C1");
  return (
    <div>
      <HashLoader color={color} css={override} size={100} />
    </div>
  );
};

export default Spinner;
