import { BackBtn } from "../../button/BackBtn";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  padding: 0 150px;
  margin-top: 100px;
`;

const Form = styled.form`
  width: 1400px;
  height: 100px;
  line-height: 100px;
  margin: 20px auto;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  min-width: 550px;
  width: 1137px;
  height: 50px;
  background-color: white;
  color: gray;
  padding: 15px;
  font-size: 20px;
  text-align: left;
  padding-left: 90px;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  top: 0;
  left: 70px;
  color: gray;
`;

const Layout = styled.div``;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 40px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w200/${(props) => props.$bgUrl}) no-repeat center;
`;

const MovieTitle = styled.h4`
  color: #fff;
  margin: 20px 0;
  font-weight: 600;
  font-size: 17px;
`;

export const Search = (s) => {
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
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
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
