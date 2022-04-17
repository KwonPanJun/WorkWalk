import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";
import { useNavigate } from "react-router-dom";
import styles from "./walker_post_list.module.css";

const WalkerPostList = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Menu />

      <section className={styles.postList}>
        <section className={styles.map}></section>
        <section className={styles.info}>
          <section className={styles.filter}>
            <div className={styles.filterForm}>
              <div>
                견종 :
                <select name="kind">
                  <option value="1">푸들</option>
                  <option value="1">시츄</option>
                  <option value="1">불독</option>
                </select>
              </div>
              <div>
                성별 :
                <input type="radio" name="sex" value="1" />
                수컷
                <input type="radio" name="sex" value="1" />
                암컷
              </div>
              <div>
                크기 :
                <input type="radio" name="size" value="1" />
                소형
                <input type="radio" name="size" value="1" />
                대형
                <input type="radio" name="size" value="1" />
                중형
              </div>
              <div>
                나이 :
                <input type="number" name="age" min="0" max="30" />
              </div>
              <button>검색</button>
            </div>
          </section>
          <section className={styles.simple}>
            <div className={styles.simpleInfo}>
              <div>이미지</div>
              <div>이름</div>
              <div>견종</div>
              <div>성별</div>
              <div>크기</div>
              <div>위치</div>
            </div>
          </section>
        </section>
      </section>

      <button
        title="walker_post_create"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        walker post create
      </button>

      {/* <div className={styles.postMap}></div>
        <section className={styles.postInfo}>
          <div className={styles.postFilter}>
            <form action="" className={styles.postFilterForm}>
              
              
              <button>검색</button>
            </form>
          </div>

          <div className={styles.info}>
            <form action="" className={styles.simpleInfo}>
              <div>
                <label>이름</label>
                <input type="text" />
              </div>
              <div>
                <label>이름</label>
                <input type="text" />
              </div>
              <div>
                <label>이름</label>
                <input type="text" />
              </div>
              <div>
                <label>이름</label>
                <input type="text" />
              </div>
              <div>
                <label>이름</label>
                <input type="text" />
              </div>
            </form>
            <button
              title="walker_post_create"
              onClick={(event) => {
                const loc = event.target.title;
                navigate(`/${loc}/${loc}`);
              }}
            >
              walker post create
            </button>
          </div>
        </section> */}
    </>
  );
};

export default WalkerPostList;

{
  /* <section className={styles.postList}>
        <button className={styles.map}>지도</button>
        <form action="" className={styles.filterForm}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>필터</button>
        </form>
      </section>
      
      <Footer /> */
}
