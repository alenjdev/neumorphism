import { useState } from "react";
import styled from "@emotion/styled";
import "./App.css";
import { PowerButton } from "./components/PowerButton";
import { Theme } from "./types";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <Container
      onDoubleClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      theme={theme}
    >
      <PowerButton theme={theme} />
    </Container>
  );
}

interface IContainerProps {
  theme: string;
}

const Container = styled.div<IContainerProps>`
  height: 100vh;
  width: 100vw;
  background: ${(props) => (props.theme === "light" ? "#ececec" : "#091921")};
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export default App;
