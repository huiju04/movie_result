import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackBtn } from "./BackBtn";

const Wrap = styled.div`
  width: 530px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #dbdbdb;
  p {
    font-size: 17px;
    font-weight: 700;
  }
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

export const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-size: 15px;
    font-weight: 800;
    color: #555;
  }
`;

export const Login = () => {
  return (
    <>
      <BackBtn />

      <Wrap>
        <Title>LOGIN</Title>
        <InputWrap>
          <input type="text" placeholder="아이디를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </InputWrap>
        <Button>로그인</Button>

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>

        <p>
          혹시 회원이 아니십니까?
          <Link to={"/signup"} style={{ color: "#ba0000" }}>
            <b> 회원가입</b>
          </Link>
        </p>
      </Wrap>
    </>
  );
};
