import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "./App.css";
import { PowerButton } from "./components/PowerButton";
import { Theme } from "./types";
import { LandingPage } from "./pages/Landing";
import { Player } from "./pages/Player";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <Container
      onDoubleClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      theme={theme}
    >
      {/* <p>{import.meta.env.VITE_MY_SECRET}</p> */}
      {/* <LandingPage /> */}
      {/* <h1>Crafting Immersive</h1>
      <h2>Unleashing the Potential of Tomorrow</h2> */}
      {/* <PowerButton theme={theme} /> */}
      <Player />
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
