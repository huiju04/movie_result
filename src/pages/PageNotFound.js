import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 100px auto;
  padding: 200px 150px;
  font-size: 80px;
  color: #ba0000;
  p {
    font-size: 40px;
    margin: 10px 0;
    color: #fff;
  }
`;
const SPageNotFound = styled.div`
  font-size: 100px;
  margin: 20px 0;
  color: gold;
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <b>404 ERROR</b>
      <SPageNotFound>
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </SPageNotFound>
      <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.</p>
      <p>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</p>
    </Wrap>
  );
};
