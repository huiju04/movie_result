import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      Login
      <Link to={"/signup"}>회원가입</Link>
    </>
  );
};
