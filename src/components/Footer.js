import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: black;
  position: relative;
  left: 0;
  bottom: 0;
  line-height: 150px;
  color: white;
`;

export const Footer = () => {
  return (
    <>
      <Container>
        <p>&copy; Copyright 2023. MOVIE. All Rights Reserved.</p>
      </Container>
    </>
  );
};
