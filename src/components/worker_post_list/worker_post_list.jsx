import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";
import { useNavigate } from "react-router-dom";

const PostList = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Menu />
      worker post list
      <button
        title="worker_post_create"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        worker post create
      </button>
      <Footer />
    </>
  );
};

export default PostList;
