import styled from "@emotion/styled";
import { FC, useRef, useState } from "react";
import "./index.css";

const possibleGreens = ["#e2fff8", "#f3fff2", "#FFFFFF"];
const getShadows = (_: boolean, darkMode: boolean) => {
  const off = darkMode
    ? `-7px -7px 7px rgba(255, 255, 255, 0.05),
  7px 7px 7px rgba(0, 0, 0, 0.5)`
    : `12px 12px 24px rgba(255, 255, 255, 0.5),
    -12px -12px 24px rgba(70, 70, 70, 0.12)`;

  const on = darkMode
    ? `-2px -2px 5px rgba(255, 255, 255, 0.05),
  inset -2px -2px 5px rgba(255, 255, 255, 0.05),
  3px 3px 5px rgba(0, 0, 0, 0.5), inset 3px 3px 5px rgba(0, 0, 0, 0.5)`
    : `12px 12px 24px rgba(255, 255, 255, 0.5), 
    -12px -12px 24px rgba(70, 70, 70, 0.12), 
    inset 12px 12px 24px rgba(255, 255, 255, 0.5), 
    inset  -12px -12px 24px rgba(70, 70, 70, 0.12)`;

  return _ ? on : off;
};

interface IPowerButtonProps {
  theme: "dark" | "light";
}

export const PowerButton: FC<IPowerButtonProps> = ({ theme }) => {
  const [touched, setTouched] = useState(false);
  const [on, setOn] = useState(false);
  const rendered = useRef(true);
  return (
    <NeonButton
      darkMode={theme === "dark"}
      onMouseDown={(e) => {
        console.log(e);
        e.stopPropagation();
        setTouched(true);
      }}
      onMouseUp={() => {
        setTouched(false);
        rendered.current = false;
        setOn((p) => !p);
      }}
      on={touched ? 1 : 0}
    >
      <svg
        className={rendered.current ? "neon" : on ? `neon-on` : "neon-off"}
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="4em"
        width="4em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
        <line x1="12" y1="2" x2="12" y2="12"></line>
      </svg>
    </NeonButton>
  );
};
interface INeonButtonProps {
  on: boolean | number;
  darkMode: boolean;
}
const NeonButton = styled.button<INeonButtonProps>`
  all: unset;
  height: 200px;
  width: 200px;
  -webkit-box-shadow: ${(props) =>
    getShadows(props.on as boolean, props.darkMode)};
  box-shadow: ${(props) => getShadows(props.on as boolean, props.darkMode)};
  border-radius: 50%;
  border: ${(props) =>
    props.darkMode ? "20px solid #091921" : "0.5rem solid #ececec"};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
