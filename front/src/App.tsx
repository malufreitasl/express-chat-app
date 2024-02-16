import { ChatPage } from "./pages/chatPage"
import { Login } from "./pages/login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Chat' element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App