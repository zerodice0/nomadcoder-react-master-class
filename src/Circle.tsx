import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  backgroundColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  backgroundColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.backgroundColor};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid ${props => props.borderColor};
`;

const Circle = ({
  backgroundColor,
  borderColor,
  text = "Hello",
}: CircleProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor ?? "transparent"}
    >
      {text}
    </Container>
  );
};

export default Circle;
