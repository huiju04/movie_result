import { Link } from "react-router-dom";
import styled from "styled-components";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: space-between;
  padding: 0 5%;
  line-height: 100px;
  @media screen and (max-width: 450px) {
    span {
      opacity: 0;
    }
  }
`;

const DivWrap = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 600;

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    p {
      width: 100px;
      font-size: 16px;
    }
  }
`;

export const Header = () => {
  const headreRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;

    if (pageY > 100) {
      headreRef.current.style.position = "fixed";
      headreRef.current.style.backgroundColor = "rgb(38, 0, 0, 0.7)";
      headreRef.current.style.backdropFilter = "blur(10px)";
    } else {
      headreRef.current.style.position = "absolute";
      headreRef.current.style.backgroundColor = "transparent";
      headreRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <>
      <Wrap ref={headreRef}>
        <Link
          to={"/"}
          style={{
            color: "#ba0000",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          <FontAwesomeIcon icon={faFilm} />
          <span>Movie</span>
        </Link>

        <DivWrap>
          <Link to={"/search"} style={{ color: "white" }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <Link to={"/signup"} style={{ color: "white" }}>
            <p>SIGN UP</p>
          </Link>
        </DivWrap>
      </Wrap>
    </>
  );
};
