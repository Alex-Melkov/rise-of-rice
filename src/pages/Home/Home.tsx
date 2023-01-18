import React from "react";
import { Link } from "react-router-dom";

import SimpleSlider from '../../components/Slider/Slider';

import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.containerHome}>
            <div className={styles.sliderBlock}>
                <SimpleSlider />
            </div>

            <div className={styles.buttonMenuBlock}>
                <Link to="rolls">
                    <button className={styles.buttonGoRolls}>Посмотреть меню</button>
                </Link>
            </div>

            <div className={styles.about}>
                <div className={styles.aboutText}>
                    <div className={styles.textTitle}>
                        <h3>О НАС</h3>
                        <p>Бесплатная доставка еды домой и в офис<br/>
                            по самым привлекательным ценам.</p>
                    </div>
                    <div className={styles.textContent}>
                        <p>Предпочитаете вкусную японскую кухню? Хотите побаловать себя восхитительными роллами со свежей рыбой, креветками, шикарным омлетом тамаго? 
                            Тогда вы попали по адресу!Сложно представить японскую кухню без вкусных и сытных роллов. 
                            В нашем меню, вы найдёте всеми любимые «Филадельфия» и «Калифорния», горячие роллы с тунцом, запечённые роллы с креветкой, суши, гунканы, нигири, сеты, wok 
                            и прочие позиции по самым доступным ценам.В своей работе мы используем только качественные ингредиенты без применения красителей и искусственных добавок.</p>
                        <p>Заказать еду на дом вы можете на нашем сайте или в мобильном приложении. Кроме того, вы можете воспользоваться бесплатной доставкой и насладиться вкусом наших блюд, не выходя из дома.     </p>
                        <p>Доставка еды «RiseofRice» - у нас работают, пожалуй, лучшие повара-сушисты. Об этом нам регулярно говорят наши клиенты.</p>
                    </div>
                </div>
                <div className={styles.aboutImage}>
                    <img src="img/about.png" alt="about" />
                </div>
            </div>
        </div>
    )
}

export default Home;