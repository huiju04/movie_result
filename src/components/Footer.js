import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #333;
  position: absolute;
  bottom: 0;
  line-height: 150px;
  color: white;
`;

export const Footer = () => {
  return <Container>&copy; Movie 2023/11</Container>;
};
