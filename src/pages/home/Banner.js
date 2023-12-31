import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { PlayBtn } from "../../button/PlayBtn";

const MainBanner = styled.section`
  height: 80vh;
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  h3,
  p {
    max-width: 650px;
    width: 100%;
    position: relative;
    text-align: left;
  }

  h3 {
    font-size: 83px;
    font-weight: 700;
    margin-bottom: 25px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: lightgray;
  }

  @media screen and (max-width: 550px) {
    h3 {
      font-size: 60px;
      line-height: 65px;
      margin-top: 30px;
    }

    p {
      font-size: 18px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Banner = ({ data }) => {
  return (
    <MainBanner $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
      <PlayBtn apiData={data} />
    </MainBanner>
  );
};
