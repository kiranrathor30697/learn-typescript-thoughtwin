import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './basic/Home';
import Form from './basic/Form';
import GetFackData from './basic/GetFackData';
import Sum from './props/Sum';
import MyComp from './props/MyComp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/get_fack_data' element={<GetFackData />} />
        <Route path='/sum' element={<Sum />} />
        <Route path='/my_comp' element={<MyComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
