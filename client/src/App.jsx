import { Outlet } from 'react-router'
import './App.css'
import HankoAuth from './components/Auth.component'
import HankoProfile from './components/Profile/Profile.component'
import LogoutBtn from './components/Logout/logout.component'
import { Chat } from './components/Chat/Chat.component'

function App() {

  return (
    <>
    {/* <HankoAuth/>
    <HankoProfile/>
    <LogoutBtn/> */}
    <Chat/>
    </>
  )
}

export default App
