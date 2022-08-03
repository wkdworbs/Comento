import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Header from './components/UI/molescules/Header';
import HeaderContainer from './components/UI/organisms/HeaderContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
       <HeaderContainer />
       <Routes>
        <Route path='/' element={<Home />}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
