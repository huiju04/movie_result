import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const Wrap = styled.div`
    width: 100%;
    height: 100px;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
    padding: 40px 150px;
  `;

  const DivWrap = styled.div``;

  return (
    <>
      <Wrap>
        <Link to={"/"}>Movie</Link>

        <DivWrap>
          <Link to={"/search"}>검색</Link>
          <Link to={"/login"}>로그인</Link>
        </DivWrap>
      </Wrap>
    </>
  );
};
