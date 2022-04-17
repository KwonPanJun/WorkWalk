// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./menu.module.css";

// const Menu = (props) => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.menu}>
//       <button
//         title="back"
//         onClick={(event) => {
//           navigate(-1);
//         }}
//       >
//         back
//       </button>
//       <button
//         title="mypage"
//         onClick={(event) => {
//           const loc = event.target.title;
//           navigate(`/${loc}/${loc}`);
//         }}
//       >
//         mypage
//       </button>
//       <button
//         title="signin"
//         onClick={(event) => {
//           const loc = event.target.title;
//           navigate(`/${loc}/${loc}`);
//         }}
//       >
//         signin
//       </button>
//       <button
//         title="signup"
//         onClick={(event) => {
//           const loc = event.target.title;
//           navigate(`/${loc}/${loc}`);
//         }}
//       >
//         signup
//       </button>
//       <button
//         title="shop"
//         onClick={(event) => {
//           const loc = event.target.title;
//           navigate(`/${loc}/${loc}`);
//         }}
//       >
//         shop
//       </button>
//     </div>
//   );
// };

// export default Menu;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./menu.module.css";
// //import 'bootstrap/dist/css/bootstrap.min.css';

// const Menu = (props) => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.menu}>
//       <div className={styles.inner}>
//         <button
//           title="back"
//           onClick={(event) => {
//             navigate(-1);
//           }}
//         >
//           back
//         </button>
//         <button
//           title="mypage"
//           class="btn btn-success"
//           onClick={(event) => {
//             const loc = event.target.title;
//             navigate(`/${loc}/${loc}`);
//           }}
//         >
//           mypage
//         </button>
//         <button
//           title="signin"
//           onClick={(event) => {
//             const loc = event.target.title;
//             navigate(`/${loc}/${loc}`);
//           }}
//         >
//           signin
//         </button>
//         <button
//           title="signup"
//           onClick={(event) => {
//             const loc = event.target.title;
//             navigate(`/${loc}/${loc}`);
//           }}
//         >
//           signup
//         </button>
//         <button
//           title="shop"
//           onClick={(event) => {
//             const loc = event.target.title;
//             navigate(`/${loc}/${loc}`);
//           }}
//         >
//           shop
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Menu;

//--------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./menu.module.css";

const Menu = (props) => {
  const navigate = useNavigate();

  return (
    <section className={styles.menu}>
      <button
        className={styles.menuItem}
        onClick={() => {
          navigate(`../login/login`);
        }}
      >
        로그인
      </button>
      <button
        className={styles.menuItem}
        onClick={() => {
          navigate(`../signup/signup`);
        }}
      >
        회원가입
      </button>
      <button
        className={styles.menuItem}
        onClick={() => {
          navigate(`../main/main`);
        }}
      >
        메인
      </button>
      <button
        className={styles.menuItem}
        onClick={() => {
          navigate(`../myInfo/myInfo`);
        }}
      >
        내정보
      </button>
      <button
        className={styles.menuItem}
        onClick={() => {
          navigate(`../shop/shop`);
        }}
      >
        SHOP
      </button>
    </section>
  );
};

export default Menu;
