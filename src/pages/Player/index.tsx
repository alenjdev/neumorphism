import styled from "@emotion/styled";
import { Button } from "../../common/Button";
import { BsArrowLeftShort } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container>
      <Header>
        <BackButton size={50}>
          <BsArrowLeftShort color={"#828487"} size={28} />
        </BackButton>
        <Playing>Playing now</Playing>
        <BackButton size={50}>
          <LuMenu color={"#828487"} />
        </BackButton>
      </Header>
      <AlbumCoverContainer>
        <Cover />
      </AlbumCoverContainer>
      <DetailContainer>
        <SongName>Low life</SongName>
        <ArtistName>Future</ArtistName>
      </DetailContainer>
      <MeterContainer>
        <TimeContainer>
          <Time>1:17</Time>
          <Time>2:47</Time>
        </TimeContainer>
        <Meter />
        <TimelineCircle></TimelineCircle>
      </MeterContainer>
      <ControlsContainer>
        <ControlButton size={90}>
          <FaBackward color={"#828487"} size={18} />
        </ControlButton>
        <PlayButton onClick={() => setIsPlaying((p) => !p)} size={90}>
          {isPlaying ? (
            <FaPause color={"#FFF"} size={18} />
          ) : (
            <FaPlay color={"#FFF"} size={18} />
          )}
        </PlayButton>
        <ControlButton size={90}>
          <FaForward color={"#828487"} size={18} />
        </ControlButton>
      </ControlsContainer>
    </Container>
  );
};

const PlayButton = styled(Button)`
  background: linear-gradient(to bottom right, #bb3a24, #d9612c);
  -webkit-border-radius: 150px;
  border-radius: 150px;
  -webkit-box-shadow: 8px 8px 43px #101113, -8px -8px 43px #40434b;
  box-shadow: 8px 8px 43px #101113, -8px -8px 43px #40434b;
  border: 3px solid #cc5929;
`;

const TimelineCircle = styled.div`
  height: 24px;
  width: 24px;
  background: #cb4429;
  border-radius: 50%;
  position: absolute;
  top: 14px;
  border: 7px solid #323232;
`;

const ControlButton = styled(Button)`
  -webkit-border-radius: 150px;
  border-radius: 150px;
  background: #282a2f;
  -webkit-box-shadow: 8px 8px 43px #101113, -8px -8px 43px #40434b;
  box-shadow: 8px 8px 43px #101113, -8px -8px 43px #40434b;
  border: 3px solid #1b1e214d;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
`;

const Time = styled.span`
  font-size: 8px;
  color: #a7a8aa;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MeterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const Meter = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 80px;
  background: #0a111a;
  box-shadow: inset 2px 2px 5px #060909, inset -4px -4px 4px #3b3d41;
`;

const DetailContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const SongName = styled.span`
  color: #a7a8aa;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const ArtistName = styled.span`
  color: #a7a8aa;
  letter-spacing: 0.5px;
  font-size: 14px;
`;

const AlbumCoverContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 20px 0;
`;

const Cover = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid #212428;
  display: grid;
  place-items: center;
  background-image: url("https://images.pexels.com/photos/4886668/pexels-photo-4886668.jpeg");
  background-size: cover;
  background-position: center;
  -webkit-border-radius: 150px;
  border-radius: 150px;
  -webkit-box-shadow: 18px 18px 43px #131517, -18px -18px 43px #2f3339;
  box-shadow: 18px 18px 43px #131517, -18px -18px 43px #2f3339;
`;

const Playing = styled.span`
  color: #a7a8aa;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  background: linear-gradient(to bottom, #353a3e, #181a1e);
  height: 100%;
  width: 100%;
  padding: 32px 16px;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

const BackButton = styled(Button)`
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background: #26282c;
  -webkit-box-shadow: 12px 12px 14px #202225, -12px -12px 14px #2c2e33;
  box-shadow: 12px 12px 14px #202225, -12px -12px 14px #2c2e33;
`;
