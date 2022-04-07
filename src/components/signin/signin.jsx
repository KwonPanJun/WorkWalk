import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import GoogleLogin from "react-google-login";
import styles from "./signin.module.css";
import Menu from "../menu/menu";
import { useNavigate } from "react-router-dom";

const Signin = (props) => {
  const CLIENT_ID = "3f949de4285a8bb5703831a8fbb03e71";
  const REDIRECT_URI = "http://localhost:3000/main/main";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Menu />

      <form className={styles.signinForm} action="../main/main">
        <input type="text" />
        <input type="text" />
        <button type="submit">signin</button>
      </form>

      <h5>signin with kakao</h5>
      <a href={KAKAO_AUTH_URL} className={styles.kakaoBtn}>
        <span>카카오계정 로그인</span>
      </a>

      <Footer />
    </>
  );
};

export default Signin;
