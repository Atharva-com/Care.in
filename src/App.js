import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Faq from './components/Home/Faq';
import Report from './components/ReportForm/Report';
import LoadingBar from 'react-top-loading-bar'
import Login from './components/Login/Login'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import List from './components/HospitalList/List';

function App() {
  const [progress, setProgress] = useState('0')
  return (

    <Router>
      <div>
        <Navbar setProgress={setProgress} title="Care.in" about="About" />
        <LoadingBar
          color='#f11946'
          progress= {progress}
          onLoaderFinished={() => progress(0)}
        />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/Report' element={<Report/>} />
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Faq' element={<Faq setProgress={setProgress} style={{position: 'relative', top: '3rem',height: '90vh'}}/>} />
            <Route exact path='/About' element={<About/>} />
            <Route exact path='/List' element={<List/>} />
          </Routes>
          
      </div>
    </Router>
  );
}

export default App;
