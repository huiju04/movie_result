import { Link } from "react-router-dom";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const Wrap = styled.div`
    width: 100%;
    height: 100px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    padding: 0 150px;
    line-height: 100px;
  `;

  const DivWrap = styled.div`
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
  `;

  return (
    <>
      <Wrap>
        <Link
          to={"/"}
          style={{
            color: "#ba0000",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          Movie
        </Link>

        <DivWrap>
          <Link to={"/login"} style={{ color: "white" }}>
            로그인
          </Link>
          <Link to={"/search"} style={{ color: "white" }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </DivWrap>
      </Wrap>
    </>
  );
};
