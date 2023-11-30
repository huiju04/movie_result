import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -70px;
  p {
    font-size: 20px;
    color: white;
  }
`;

export const Loading = () => {
  return (
    <Container>
      <p>
        <BeatLoader color="#ba0000" />
        <p>Loading...</p>
      </p>
    </Container>
  );
};
