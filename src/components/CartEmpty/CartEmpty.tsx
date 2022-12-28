import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CartEmpty.module.scss'

const CartEmpty: React.FC = () => {
  return (
    <div className={styles.containerCartEmpty}>
      <div className={styles.cartEmpty}>
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы ещё ничего не заказали.
          <br />
          Для того, чтобы сделать заказ, перейдите на главную страницу.
        </p>
        <img src="img/empty-cart.png" alt="Empty cart" />
        <Link to="/rolls"> 
          <button className={styles.buttonBlack}>Вернуться к меню</button>
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;