import React from "react";
import Header from "../../header/header";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const CLIENT_ID = "3f949de4285a8bb5703831a8fbb03e71";
  const REDIRECT_URI = "http://localhost:3000/main/main";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const navigate = useNavigate();

  return (
    <section className={styles.loginPage}>
      <Header />
      <div className={styles.login}>
        <h1>로그인</h1>
        <div className={styles.loginCard}>
          <form className={styles.loginForm} action="">
            <input type="text" placeholder="ID 입력" />
            <input type="password" placeholder="비밀번호 입력" />
            <div>
              <button type="submit">로그인</button>
              <button
                onClick={() => {
                  navigate("../../signup/signup");
                }}
              >
                회원가입
              </button>
            </div>
          </form>

          <div className={styles.kakao}>
            <a href={KAKAO_AUTH_URL} className={styles.kakaoBtn}>
              <img src="./images/kakao_login.png"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
