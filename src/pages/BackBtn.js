import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Div = styled.div`
  text-align: left;
  margin: 20px 0 0 50px;
  font-size: 25px;
  position: absolute;
`;

export const BackBtn = () => {
  return (
    <Div>
      <Link to={-1}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </Div>
  );
};
