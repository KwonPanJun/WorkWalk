import "./app.module.css";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Main from "./components/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/shop/shop";
import Mypage from "./components/mypage/mypage";
import WalkerPostList from "./components/walker_post_list/walker_post_list";
import WorkerPostList from "./components/worker_post_list/worker_post_list";
import WalkerPostCreate from "./components/walker_post_create/walker_post_create";
import WorkerPostCreate from "./components/worker_post_create/worker_post_create";
import Chat from "./components/chat/chat";
import React, { component }  from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Signin />}></Route>
        <Route path="/signin/signin" exact element={<Signin />}></Route>
        <Route path="/signup/signup" exact element={<Signup />}></Route>
        <Route path="/main/main" exact element={<Main />}></Route>
        <Route path="/mypage/mypage" exact element={<Mypage />}></Route>
        <Route path="/shop/shop" exact element={<Shop />}></Route>
        <Route
          path="/worker_post_list/worker_post_list"
          exact
          element={<WorkerPostList />}
        ></Route>
        <Route
          path="/walker_post_list/walker_post_list"
          exact
          element={<WalkerPostList />}
        ></Route>
        <Route
          path="/worker_post_create/worker_post_create"
          exact
          element={<WorkerPostCreate />}
        ></Route>
        <Route
          path="/walker_post_create/walker_post_create"
          exact
          element={<WalkerPostCreate />}
        ></Route>
        <Route path="/chat/chat" exact element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
