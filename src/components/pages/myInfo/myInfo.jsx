import React from "react";
import Header from "../../header/header";
import styles from "./myInfo.module.css";

const MyInfo = (props) => {
  return (
    <section className={styles.myInfoPage}>
      <Header />
      <div className={styles.myInfo}>
        <h1> 내정보</h1>
        <div className={styles.myInfoCard}>
          <form className={styles.myInfoForm} action="">
            <div className={styles.myInfoFormItem}>
              <label htmlFor="">아이디</label>
              <input type="text" />
            </div>
            <div className={styles.myInfoFormItem}>
              비밀번호
              <input type="password" />
            </div>
            <div className={styles.myInfoFormItem}>
              이름
              <input type="text" />
            </div>
            <div className={styles.myInfoFormItem}>
              생년월일
              <input type="text" />
            </div>
            <div className={styles.myInfoFormItem}>
              성별
              <div>
                남성
                <input type="radio" name="sex" />
                여성
                <input type="radio" name="sex" />
              </div>
            </div>
            <div className={styles.myInfoFormItem}>
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

export default MyInfo;
