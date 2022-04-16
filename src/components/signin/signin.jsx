import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import GoogleLogin from "react-google-login";
import styles from "./signin.module.css";
import Menu from "../menu/menu";
import { Link, useNavigate } from "react-router-dom";

const Signin = (props) => {
  const CLIENT_ID = "3f949de4285a8bb5703831a8fbb03e71";
  const REDIRECT_URI = "http://localhost:3000/main/main";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.signin}>
        <h1>로그인</h1>
        <div className={styles.signin__card}>
          <form className={styles.signinForm} action="../main/main">
            <input type="text" placeholder="ID 입력" />
            <input type="password" placeholder="비밀번호 입력" />
            <button type="submit">로그인</button>
          </form>

          <div className={styles.link}>
            <div>

              <a href={KAKAO_AUTH_URL} className={styles.kakaoBtn}>
                <img src="/images/kakao_login.png"></img>
              </a>
            </div>
            <div>
              <Link to="/signup/signup">회원가입</Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;

//                <h5>Sign in with kakao</h5>
//<span>카카오계정 로그인</span>
