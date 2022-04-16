import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";
import { useNavigate } from "react-router-dom";

const WalkerPostCreate = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      walker post create
      <button
        title="chat"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        chat
      </button>
      <Footer />
    </>
  );
};

export default WalkerPostCreate;
