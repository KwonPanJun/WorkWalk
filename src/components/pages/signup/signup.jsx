import React from "react";
import Header from "../../header/header";
import styles from "./signup.module.css";

const Signup = (props) => {
  return (
    <section className={styles.signupPage}>
      <Header />
      <div className={styles.signup}>
        <h1>회원가입</h1>
        <div className={styles.signupCard}>
          <form className={styles.signupForm} action="">
            <div className={styles.signupFormItem}>
              <label htmlFor="">아이디</label>
              <input type="text" />
            </div>
            <div className={styles.signupFormItem}>
              비밀번호
              <input type="password" />
            </div>
            <div className={styles.signupFormItem}>
              이름
              <input type="text" />
            </div>
            <div className={styles.signupFormItem}>
              생년월일
              <input type="text" />
            </div>
            <div className={styles.signupFormItem}>
              성별
              <div>
                남성
                <input type="radio" name="sex" />
                여성
                <input type="radio" name="sex" />
              </div>
            </div>
            <div className={styles.signupFormItem}>
              연락처
              <input type="tel" />
            </div>
            <div>
              <button type="submit">가입</button>
              <button>취소</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
