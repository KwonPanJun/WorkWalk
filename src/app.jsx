import "./app.module.css";
import Signup from "./components/pages/signup/signup";
import Main from "./components/pages/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/shop/shop";
import WalkerPostList from "./components/walker_post_list/walker_post_list";
import WorkerPostList from "./components/worker_post_list/worker_post_list";
import WalkerPostCreate from "./components/walker_post_create/walker_post_create";
import WorkerPostCreate from "./components/worker_post_create/worker_post_create";
import Chat from "./components/chat/chat";
import Login from "./components/pages/login/login";
import MyInfo from "./components/pages/myInfo/myInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/login/login" exact element={<Login />}></Route>
        <Route path="/signup/signup" exact element={<Signup />}></Route>
        <Route path="/main/main" exact element={<Main />}></Route>
        <Route path="/myInfo/myInfo" exact element={<MyInfo />}></Route>
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
