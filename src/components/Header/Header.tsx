import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from '../Search/Search';

import { selectCart } from '../../redux/Cart/selectors';
import { CartItemType } from '../../redux/Cart/types';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  let { items, totalPrice } = useSelector(selectCart);
  let location = useLocation()

  let totalCount = items.reduce((sum: number, item: CartItemType) => sum + item.count, 0);

  if (location.pathname === '/') {
    return (
      <div className={styles.homePageHeader}>
        <div className={styles.homePageHeaderContainer}>
          <div className={styles.homePageHeaderContacts}>
            <p className={styles.city}>Москва</p>
            <p className={styles.phone}>8 800 600 50 50</p>
            <p className={styles.subtitle}>Телефон горячей линии</p>
          </div>
          <Link to="/">
            <div className={styles.homePageHeaderLogo}>
              <img src="/img/logo.svg" alt="Roll logo" />
            </div>
          </Link>
          <div className={styles.homePageHeaderCart}>
            <Link to="/cart">
              <button className={styles.homePageButtonCart}>
                <span>{totalPrice} ₽</span>
                <div className={styles.homePageButtonDelimiter}></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{totalCount}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img width="38" src="/img/logo.svg" alt="Roll logo" />
            <div>
              <h1>Rise of Rice</h1>
              <p>Кто попробует, тот полюбит!</p>
            </div>
          </div>
        </Link>
        {(location.pathname !== '/cart' && location.pathname !== '/') && <Search />}
        <div className={styles.headerCart}>
          <Link to="/cart">
            <button className={styles.buttonCart}>
              <span>{totalPrice} ₽</span>
              <div className={styles.buttonDelimiter}></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{totalCount}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
