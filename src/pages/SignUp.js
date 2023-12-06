import { BackBtn } from "../button/BackBtn";
import styled from "styled-components";
import { ErrorMessage } from "../ErrorMessage";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
  @media screen and (max-width: 1020px) {
    width: 450px;
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
  font-size: 26px;
  color: white;
  border: 1px solid #ba0000;
  background-color: #ba0000;
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    width: 400px;
  }
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
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  color: gray;
  @media screen and (max-width: 1020px) {
    width: 400px;
  }
`;

const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-size: 15px;
    font-weight: 800;
    color: #555;
  }
`;

export const SignUp = () => {
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
          <Title>SIGN UP</Title>

          <Input
            {...register("username", {
              required: "아이디는 필수입니다.",
              minLength: {
                value: 8,
                message: "아이디는 최소 8자리 이상 입니다.",
              },
            })}
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <ErrorMessage text={errors?.username?.message} />

          <Input
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자리 이상 입니다.",
              },
            })}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <ErrorMessage text={errors?.password?.message} />

          <Input
            {...register("password_1", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자리 이상 입니다.",
              },
            })}
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
          <ErrorMessage text={errors?.password_1?.message} />

          <Input
            {...register("email", {
              required: "이메일은 필수입니다",
              minLength: {
                value: 8,
                message: "대소문자를 포함시켜주세요",
              },
            })}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <ErrorMessage text={errors?.email?.message} />

          <Button>회원가입</Button>

          <Separ>
            <span></span>
            <b>또는</b>
            <span></span>
          </Separ>

          <p>
            혹시 회원이 아니십니까?
            <Link to={"/login"} style={{ color: "#ba0000" }}>
              <b> 로그인 </b>
            </Link>
          </p>
        </Form>
      </Wrap>
    </>
  );
};
