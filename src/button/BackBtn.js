import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Div = styled.div`
  text-align: left;
  font-size: 25px;
  padding: 50px;
  position: absolute;
  top: 70px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const BackBtn = () => {
  return (
    <Div>
      <Link to={-1}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ba0000" }} />
      </Link>
    </Div>
  );
};
