import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Signin = (props) => (
  <>
    <Header />
    <h1>signin</h1>
    <form action="../welcome/welcome">
      <input type="text" />
      <input type="text" />
      <button>signin</button>
    </form>
    <section>
      <h5>signin with ohers</h5>
      <button>kakao</button>
    </section>
    <Footer />
  </>
);

export default Signin;
