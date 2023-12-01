import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  font-size: 50px;
  position: absolute;
  bottom: 250px;
  right: 145px;
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
