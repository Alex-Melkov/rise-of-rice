import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import MainLayout from '../../layouts/MainLayout';

import Loader from '../Loader/Loader';

import './App.scss'

const Rolls = React.lazy(() => import(/* webpackChunkName: "Rolls" */ '../../pages/Rolls/Rolls'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ '../../pages/Cart/Cart'));
const FullRoll = React.lazy(() => import(/* webpackChunkName: "FullRoll" */ '../../pages/FullRoll/FullRoll'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound'));

function App() {
  return (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="rolls" element={
              <Suspense fallback={<div></div>}>
                <Rolls />
              </Suspense>} />
            <Route path="cart" element={
              <Suspense fallback={<Loader />}>
                <Cart />
              </Suspense>} />
            <Route path="rolls/roll/:id" element={
              <Suspense fallback={<Loader />}>
                <FullRoll />
              </Suspense>} />
            <Route path="*" element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>} />
          </Route>
        </Routes>



  );
}

export default App;
