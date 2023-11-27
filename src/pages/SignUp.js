import { Link } from "react-router-dom";
import { BackBtn } from "./BackBtn";
import styled from "styled-components";

const Wrap = styled.div``;
const Title = styled.div``;
const InWrap = styled.div``;

export const SignUp = () => {
  return (
    <Wrap>
      <BackBtn />

      <InWrap>
        <Title>회원가입</Title>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호확인" />
        <input type="email" placeholder="이메일" />
        <Link to={"/signup"}>회원가입</Link>
      </InWrap>
    </Wrap>
  );
};
