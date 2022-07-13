import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './basic/Home';
import Form from './basic/Form';
import GetFackData from './basic/GetFackData';
import Sum from './props/Sum';
import MyComp from './props/MyComp';
import Multiple_Img from './props/Multiple_Img';
import ObjectType from './props/ObjectType';
import ArrayType from './props/ArrayType';
import Header from './api_calling/layout/Header';
import Register from './api_calling/Register';
import Login from './api_calling/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/get_fack_data' element={<GetFackData />} />
        <Route path='/sum' element={<Sum />} />
        <Route path='/my_comp' element={<MyComp />} />
        <Route path='/multiple_img' element={<Multiple_Img />} />
        <Route path='/object_type' element={<ObjectType />} />
        <Route path='/array_type' element={<ArrayType />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
