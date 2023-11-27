import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrap = styled.div`
  width: 100%;
  height: 903.5px;
  padding: 20px 150px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
  }
`;

const Title = styled.h3`
  font-size: 90px;
  font-weight: 700;
  margin: 350px 0 50px 0;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  font-size: 50px;
  margin-top: 400px;
`;

export const Banner = () => {
  return (
    <Wrap>
      <div>
        <Title>영화제목</Title>
        <p>영화소개글</p>
      </div>

      <Button>
        <FontAwesomeIcon icon={faPlay} />
      </Button>
    </Wrap>
  );
};
