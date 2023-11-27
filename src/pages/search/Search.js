import { BackBtn } from "../BackBtn";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;

const InputWrap = styled.div`
  width: 1400px;
  height: 100px;
  background-color: gray;
  line-height: 100px;
  margin: 0 auto;
  input {
    width: 1137px;
    height: 50px;
    padding: 15px;
    font-size: 20px;
  }
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
`;

export const Search = () => {
  return (
    <>
      <BackBtn />
      <Wrap>
        <InputWrap>
          <input />
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputWrap>
      </Wrap>
    </>
  );
};
