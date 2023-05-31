import { Route, Routes } from "react-router-dom"
import TaskList from './components/TaskList'
import UserList from './components/UserList';
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/" element={<TaskList />} />
      </Routes>
    </>
  )
}

export default App
