import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div``;

const Title = styled.div``;

export const Login = () => {
  return (
    <Wrap>
      <Title>로그인</Title>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <Link to={"/signup"}>회원가입</Link>
    </Wrap>
  );
};
