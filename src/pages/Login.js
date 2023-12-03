import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackBtn } from "../button/BackBtn";
import { ErrorMessage } from "../ErrorMessage";
import { useForm } from "react-hook-form";

const Wrap = styled.div`
  width: 530px;
  height: 100vh;
  margin: 100px auto 0 auto;
  background-color: white;
  border: 1px solid #dbdbdb;
  p {
    font-size: 17px;
    font-weight: 700;
    color: #333;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding: 40px;
  color: #000;
`;

const Button = styled.button`
  width: 450px;
  height: 50px;
  margin-top: 20px;
  font-size: 23px;
  color: white;
  border: 1px solid #ba0000;
  background-color: #ba0000;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  margin-top: 5%;
  padding: 60px 20px;
  border-radius: 10px;
  text-align: left;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 450px;
  height: 50px;
  border: 1px solid #dbdbdb;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  color: gray;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = () => {};

  return (
    <>
      <BackBtn />

      <Wrap>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Title>LOGIN</Title>

          <Input
            {...register("username", {
              required: "아이디는 필수 입니다.",
            })}
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <ErrorMessage text={errors?.username?.message} />

          <Input
            {...register("password", {
              required: "비밀번호를 필수해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자리 이상 입니다.",
              },
            })}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <ErrorMessage text={errors?.password?.message} />

          <Button>로그인</Button>
        </Form>
      </Wrap>
    </>
  );
};
