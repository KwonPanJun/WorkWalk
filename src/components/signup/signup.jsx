import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";
import styles from "./signup.module.css";

const Signup = (props) => (
  <>
    <Header />

    <form action="../signin/signin">
      <fieldset className={styles.signupForm}>
        <legend>회원 정보</legend>
        <div className={styles.formItem}>
          <label htmlFor="">이름</label>
          <input type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">아이디</label>
          <input type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">비밀번호</label>
          <input type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">이름</label>
          <input type="text" />
        </div>
        <button type="submit">가입</button>
      </fieldset>
    </form>

    <Footer />
  </>
);

export default Signup;
