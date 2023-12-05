import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const A = styled.a`
  width: 50px;
  height: 50px;
  color: #ba0000;
  font-size: 40px;
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TopBtn = () => {
  return (
    <>
      <A href="#">
        <FontAwesomeIcon icon={faArrowUp} />
      </A>
    </>
  );
};
