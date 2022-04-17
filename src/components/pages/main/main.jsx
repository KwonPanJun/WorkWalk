import React from "react";
import Header from "../../header/header";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import Menu from "../../menu/menu";

const Main = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className={styles.mainBtn}>
        <button
          className={styles.mainBtnItem}
          title="worker_post_list"
          onClick={(event) => {
            const loc = event.target.title;
            navigate(`/${loc}/${loc}`);
          }}
        >
          Worker
        </button>
        <button
          className={styles.mainBtnItem}
          title="walker_post_list"
          onClick={(event) => {
            const loc = event.target.title;
            navigate(`/${loc}/${loc}`);
          }}
        >
          Walker
        </button>
      </section>
    </>
  );
};

export default Main;

{
  /* <div className={styles.mainBtn}>
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
          
        >
          walker
        </button>
      </div>
      <Footer /> */
}
