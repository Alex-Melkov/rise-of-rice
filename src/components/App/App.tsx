import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';
import Loader from '../Loader/Loader';

const Rolls = React.lazy(() => import(/* webpackChunkName: "Rolls" */ '../../pages/Rolls/Rolls'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ '../../pages/Cart/Cart'));
const FullRoll = React.lazy(() => import(/* webpackChunkName: "FullRoll" */ '../../pages/FullRoll/FullRoll'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound'));

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rolls" element={
            <Suspense fallback={<div></div>}>
              <Rolls />
            </Suspense>} />
          <Route path="/cart" element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>} />
          <Route path="/rolls/roll/:id" element={
            <Suspense fallback={<Loader />}>
              <FullRoll />
            </Suspense>} />
          <Route path="*" element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
