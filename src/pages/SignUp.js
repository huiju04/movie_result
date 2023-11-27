import { Link } from "react-router-dom";
import { BackBtn } from "./BackBtn";
import styled from "styled-components";

const Wrap = styled.div`
  width: 530px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #dbdbdb;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding: 40px;
`;

const InputWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  input {
    width: 450px;
    height: 50px;
    border: 1px solid #dbdbdb;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 700;
    padding: 10px;
    color: gray;
  }
`;

const Button = styled.button`
  width: 450px;
  height: 50px;
  margin-top: 20px;
  font-size: 23px;
  color: white;
  border: 1px solid #ba0000;
  background-color: #ba0000;
  cursor: pointer;
`;

export const SignUp = () => {
  return (
    <>
      <BackBtn />

      <Wrap>
        <InputWrap>
          <Title>SIGN UP</Title>
          <input type="text" placeholder="아이디를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
          <input type="email" placeholder="이메일을 입력해주세요" />
        </InputWrap>
        <Button>회원가입</Button>
      </Wrap>
    </>
  );
};
