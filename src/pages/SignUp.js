import { Link } from "react-router-dom";
import { BackBtn } from "./BackBtn";

export const SignUp = () => {
  return (
    <>
      <Link to={"/Login"}>로그인</Link>
      <BackBtn />
    </>
  );
};
