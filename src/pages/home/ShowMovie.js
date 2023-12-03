import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Container = styled.section`
  margin-bottom: 80px;
  a {
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 650px) {
      margin-bottom: 30px;
      font-size: 30px;
  }

  @media screen and (max-width: 320px) {
    
  }
`;

const CoverBg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w400/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 5px;
  margin-bottom: 20px;

  @media screen and (max-width: 1500) {
    height: 300px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1024) {
    height: 300px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1024px) {
    height: 250px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 640px) {
    height: 200px;
    margin-bottom: 15px;
  }
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.5,
    },
  },
};

export const ShowMovie = ({ titleName, movieData }) => {
  return (
    <Container>
      <Title>{titleName}</Title>

      <Swiper {...params}>
        {movieData.map((data, i) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
