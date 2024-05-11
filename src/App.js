
import './App.css';

import { useState } from "react";
import TopBar from "./componnents/TopBar/TopBar";
import SideBar from "./componnents/sideBar/SideBar";
import { createContext } from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/Contacts/Contacts';
import Balances from './pages/balances/Balances';
import Profile from './pages/profile/Profile';
import Calender from './pages/calender/Calender';
import Faq from './pages/faq/Faq';
import Bar from './pages/bar/Bar';
import Pie from './pages/pie/Pie';
import Line from './pages/line/Line';
import Geography from './pages/geography/Geography';

export const DisplaySide = createContext()

export const Dark = createContext()

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('Dark')));


  const [display, setTrue] = useState(false)
  const displayState = { display, setTrue }

  // const [dark, setDark] = useState(false)
  const darkMode = { dark, setDark }
  return (
    <div className="App ">
      <DisplaySide.Provider value={displayState}>
        <Dark.Provider value={darkMode}>
          <TopBar />
          <div className={`d-flex cont trans-5 ${dark ? "bg-black" : "  bg-light"}`}>
            <SideBar />
            {/* <p className="">Content Here</p> */}
            <div className={`content ${dark ? "bg-black text-white border border-black" : " bg-light"}`}>
              <Routes>
                <Route path='' element={<Dashboard />} />
                <Route path='team' element={<Team />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='balances' element={<Balances />} />
                <Route path='profile' element={<Profile />} />
                <Route path='calender' element={<Calender />} />
                <Route path='faq' element={<Faq />} />
                <Route path='bar' element={<Bar />} />
                <Route path='pie' element={<Pie />} />
                <Route path='line' element={<Line />} />
                <Route path='geography' element={<Geography />} />
              </Routes>
            </div>
          </div>
        </Dark.Provider>
      </DisplaySide.Provider>
    </div>
  );
}

export default App;
