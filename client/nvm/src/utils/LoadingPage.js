import React from "react";
import styled from "styled-components";

function Loadingpage() {
  return (
    <Background>
      <Spinner>
        <span>Loading ... </span>
        <HalfSpinner></HalfSpinner>
      </Spinner>
    </Background>
  );
}

export default Loadingpage;

const Background = styled.div`
  display: flex;
  z-index: 2000;
  background: #0d0d0d;
  opacity: 0.9;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
`;

const Spinner = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  span {
    font-size: 2rem;
    animation: fade 1s linear 0s infinite;
    padding-right: 1rem;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const HalfSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #03fc4e;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.5s linear 0s infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;