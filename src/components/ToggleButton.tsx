import { ChangeEvent, EventHandler } from "react";
import styled from "styled-components";

const ToggleButtonWrapper = styled.label<{
  position: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}>`
  position: ${props => props.position ?? "relative"};
  display: inline-block;
  width: 60px;
  height: 34px;
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  bottom: ${props => props.bottom};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: "#2196F3";
  }

  input:focus + span:be {
    box-shadow: 0 0 1px "#2196F3";
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

interface ToggleButtonProps {
  onChange: EventHandler<ChangeEvent<HTMLInputElement>>;
  position: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const ToggleButton = ({
  onChange,
  position,
  top,
  bottom,
  left,
  right,
}: ToggleButtonProps) => {
  return (
    <ToggleButtonWrapper
      className="switch"
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <input type="checkbox" onChange={onChange} />
      <span className="slider" />
    </ToggleButtonWrapper>
  );
};
