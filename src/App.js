import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
