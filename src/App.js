
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/details';
import UserPage from './components/UserPage';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="users" element={<UserPage/>} />
     </Routes>
     
    </div>
  );
}

export default App;
