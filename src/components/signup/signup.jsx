import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Signup = (props) => (
  <>
    <Header />
    <h1>signup</h1>
    <form action="../signin/signin">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>signup</button>
    </form>
    <Footer />
  </>
);

export default Signup;
