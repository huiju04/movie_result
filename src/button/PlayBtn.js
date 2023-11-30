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
  right: 200px;
  cursor: pointer;
`;

export const PlayBtn = () => {
  return (
    <>
      <Link to={"/detail/1075794"}>
        <Button>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </Link>
    </>
  );
};
