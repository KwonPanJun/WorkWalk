import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";
import { useNavigate } from "react-router-dom";

const WalkerPostList = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Menu />
      walker post list
      <button
        title="walker_post_create"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        walker post create
      </button>
      <Footer />
    </>
  );
};

export default WalkerPostList;
