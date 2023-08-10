import styled from "@emotion/styled";
import { FC, ReactNode, HTMLAttributes } from "react";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size: number;
  children: ReactNode | string;
}

export const Button: FC<IButtonProps> = ({ size, children, ...rest }) => {
  return (
    <Container size={size} {...rest}>
      {children}
    </Container>
  );
};

interface IContainerProps {
  size: number;
}

const Container = styled.button<IContainerProps>`
  all: unset;
  box-sizing: border-box;
  border-radius: 50px;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  display: grid;
  place-items: center;
`;
