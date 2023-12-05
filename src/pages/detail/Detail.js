import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Logding";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { useScrollTop } from "../../lib/useScrollTop";
import { BackBtn } from "../../button/BackBtn";

const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 100px 7%;
  }
`;

const Bg = styled.div`
  width: 43%;
  height: 750px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;

  @media screen and (max-width: 550px) {
    width: 420px;
    height: 300px;
  }
`;

const Con = styled.div`
  width: 55%;
  font-size: 20px;
  padding-top: 50px;
  text-align: left;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  text-align: left;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
  background-color: white;
  padding: 5px;
  color: #000;
  @media screen and (max-width: 1020px) {
    font-size: 45px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    opacity: 0.6;
    padding: 0 0 20px 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    @media screen and (max-width: 1020px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const Rated = styled.div`
  font-weight: 400;
  margin-bottom: 20px;
`;

const Genres = styled.ul`
  width: 400px;
  margin: 20px 0;
  display: flex;
  li {
    margin-left: 10px;
  }
`;

const Release = styled.div`
  margin-top: 10px;
`;

const Runtime = styled.div`
  margin-top: 10px;
`;

const Desc = styled.p`
  max-width: 70%;
  width: 100%;
  padding-top: 30px;
  opacity: 0.7;
  line-height: 2em;
  font-weight: 300;

  @media screen and (max-width: 1020px) {
    max-width: 100%;
    font-size: 18px;
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        console.log(data);
        setDetailData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <BackBtn />
          <Container>
            <Bg $bgUrl={detailData.backdrop_path} />
            <Con>
              <Title>
                {detailData.title} <p>{detailData.tagline}</p>
              </Title>
              <Release>개봉 : {detailData.release_date}</Release>
              <Genres>
                장르 :{" "}
                {detailData.genres.map((genre) => (
                  <li key={genre.id}>{genre.name} </li>
                ))}
              </Genres>
              <Rated>평점 : {Math.round(detailData.vote_average)}점</Rated>
              <Runtime> 기본 정보 : {detailData.runtime}분</Runtime>
              <Desc>{detailData.overview}</Desc>
            </Con>
          </Container>
        </>
      )}
    </div>
  );
};
