import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Hackathon from './pages/Hackathon';
import Team from './pages/Team';
import Home from './pages/Home';
import Event from './pages/Event';
import Event2025 from './pages/Event2025';
import Navbar from './containers/Navbar';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/Hackathon2023" element = {<Hackathon/>} />
                <Route path="/Team" element = {<Team />} />
                <Route path="/Event" element = {<Event />} />
                <Route path="/Event2025" element = {<Event2025 />} />
            </Routes>
        </BrowserRouter>
    </>
    , document.getElementById("root"))
    
serviceWorker.register();
