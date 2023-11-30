import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  height: 100vh;
  margin: 100px auto;
  padding: 200px 150px;
  /* background-color: lightgray; */
  font-size: 30px;
`;
const SPageNotFound = styled.div`
  font-size: 20px;
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <b>404</b>
      <SPageNotFound>
        <FontAwesomeIcon icon={faImage} />
      </SPageNotFound>
      <p>Page not found</p>
    </Wrap>
  );
};
