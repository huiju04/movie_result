import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid rgb(0, 0, 0, 0.7);
  padding-left: 9px;
  font-size: 25px;
  line-height: 50px;
  color: #ba0000;
  position: absolute;
  bottom: 300px;
  right: 100px;
  cursor: pointer;
`;

export const PlayBtn = ({ apiData }) => {
  return (
    <>
      <Link to={`/detail/${apiData.id}`}>
        <Button>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </Link>
    </>
  );
};
