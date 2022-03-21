import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";

const WelcomePage = () => {
  const [value, setValue] = useState(new Date());
  const { user } = useAuth();
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <WelcomePageStyled>
      <h1>Hello, {user?.displayName}</h1>
      <div className="clock">
        <Clock value={value} />
      </div>
    </WelcomePageStyled>
  );
};

const WelcomePageStyled = styled.div`
  .clock {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default WelcomePage;
