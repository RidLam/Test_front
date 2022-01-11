import { Routes, Route } from "react-router-dom";
import './styles/UserList.css';
import Header from "./components/header/Header";
import UserList from "./components/userList/UserList";
import UserPosts from "./components/userPosts/UserPosts";


const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id/posts" element={<UserPosts />} />
        </Routes>
      </div>
    </>
  )
}

export default App;