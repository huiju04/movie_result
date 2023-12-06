import styled from "styled-components";
import { BackBtn } from "../../button/BackBtn";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { movieSearch } from "../../api";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  padding: 0 100px;
  margin-top: 120px;
  @media screen and (max-width: 1020px) {
    padding: 0 50px;
  }
`;

const Form = styled.form`
  margin: 0 auto;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 1000px;
  height: 50px;
  background-color: white;
  color: gray;
  padding: 10px 0 10px 50px;
  font-size: 20px;
  text-align: left;
  margin-bottom: 50px;
  @media screen and (max-width: 1020px) {
    width: 700px;
    font-size: 18px;
  }
  @media screen and (max-width: 550px) {
    width: 400px;
    font-size: 16px;
  }
`;

const Layout = styled.div`
  width: 100%;
  @media screen and (max-width: 1020px) {
    width: 870px;
  }
  @media screen and (max-width: 550px) {
    width: 400px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 40px;
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w200/${(props) => props.$bgUrl}) no-repeat center;
  @media screen and (max-width: 1020px) {
    height: 250px;
  }
  @media screen and (max-width: 550px) {
    height: 300px;
  }
`;

const MovieTitle = styled.h4`
  color: #fff;
  margin: 20px 0;
  font-weight: 600;
  font-size: 17px;
  @media screen and (max-width: 1020px) {
    font-size: 16px;
  }
`;

export const Search = () => {
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);
  return (
    <>
      <BackBtn />
      <Wrap>
        <Form onSubmit={handleSubmit(searchHandler)}>
          <Input
            {...register("search", {
              required: "검색 내용을 입력해주세요.",
            })}
            type="text"
            placeholder="찾으시는 영화 제목을 입력해주세요"
          />
        </Form>

        <Layout>
          {term && (
            <ConWrap>
              {term.map((data) => (
                <Link to={`/detail/${data.id}`}>
                  <Con key={data.id}>
                    <Bg $bgUrl={data.poster_path} />
                    <MovieTitle>{data.title}</MovieTitle>
                  </Con>
                </Link>
              ))}
            </ConWrap>
          )}
        </Layout>
      </Wrap>
    </>
  );
};
