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
  width: 370px;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
  border-bottom: 4px solid #ba0000;
  padding: 20px;
  text-align: center;
  @media screen and (max-width: 650px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

const CoverBg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w400/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  margin-bottom: 20px;

  @media screen and (max-width: 1500) {
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
  font-size: 110%;
  text-align: center;

  p {
    opacity: 0.6;
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
              <MovieTitle>
                {data.title}
                <br />
                <p>{Math.round(data.vote_average)}점</p>
              </MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
