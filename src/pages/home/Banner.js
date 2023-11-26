import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 903.5px;
  background-color: lightgray;
  padding: 0 150px;
  text-align: left;

  p {
    font-size: 25px;
  }
`;

const Title = styled.h3`
  font-size: 70px;
`;

const Button = styled.button``;

export const Banner = () => {
  return (
    <Wrap>
      <Title>영화제목</Title>
      <p>영화소개글</p>
      <Button>재생버튼</Button>
    </Wrap>
  );
};
