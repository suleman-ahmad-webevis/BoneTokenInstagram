import React from "react";
import styled from "styled-components";

export const ButtonToggle = styled.div`
  background: none;
  border: 1px solid #90caf9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  width: 50%;
  color: rgba(144, 202, 249, 0.5);
  font-size: 16px;
  line-height: 24px;
  font-family: Ruddy-Bold;
  cursor: pointer;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const types = ["Yes", "No"];
function BreederButtons({ setDog, dog }) {
  return (
    <ButtonGroup>
      {types.map((type) => (
        <ButtonToggle
          key={type}
          style={
            dog && dog.dogBreeder === type
              ? { color: "#2196F3" }
              : { color: "#90CAF9" }
          }
          onClick={() => setDog({ ...dog, dogBreeder: type })}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default BreederButtons;
