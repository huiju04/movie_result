import styled from "styled-components";

const Container = styled.div`
  padding: 150px 0 0 5%;
  text-align: left;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
