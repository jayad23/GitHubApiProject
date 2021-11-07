import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Views/Home'
import Followers from "./Components/Followers";
import SingleUser from "./Views/SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home/>}/>
        <Route path='/users/:name/followers' exact element={ <Followers/>}/>
        <Route path='/users/:userName' exact element={ <SingleUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
