import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import Navbar from "../src/Components/Navbar/Navbar.jsx"
import {BrowserRouter as Router} from "react-router-dom"
import AllRoutes from "./AllRoutes"
import DisplayAnswers from './Pages/Questions/DisplayAnswers';
import { fetchAllUsers } from './actions/users';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(fetchAllQuestions());
   dispatch(fetchAllUsers());
  },[dispatch])
  return (
    <div className="App">
    <Router><Navbar/>
    <AllRoutes/>
    </Router>
    </div>
  );
}

export default App;
