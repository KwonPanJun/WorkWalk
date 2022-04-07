import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import Menu from "../menu/menu";

const Main = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Menu />

      <div className={styles.mainBtn}>
        <button
          className={styles.mainBtnItem}
          title="worker_post_list"
          onClick={(event) => {
            const loc = event.target.title;
            navigate(`/${loc}/${loc}`);
          }}
        >
          worker
        </button>
        <button
          className={styles.mainBtnItem}
          title="walker_post_list"
          onClick={(event) => {
            const loc = event.target.title;
            navigate(`/${loc}/${loc}`);
          }}
        >
          walker
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Main;
