import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Views/Home'
import Followers from "./Components/Followers";
import SingleUser from "./Views/SingleUser";
import Following from './Views/Following'
import Repo from "./Views/Repo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home/>}/>
        <Route path='/users/:name/repos' element={ <Repo/>}/>
        <Route path='/users/:name/following' element={ <Following/>}/>
        <Route path='/users/:name/followers' element={ <Followers/>}/>
        <Route path='/users/:userName' element={ <SingleUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
