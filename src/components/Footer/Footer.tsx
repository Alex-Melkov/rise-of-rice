import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footerContainer}>
                <Link to="">
                    <div className={styles.footerLogo}>
                        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="footer-logo" />
                        <p>© 2022 “Rise of Rice”<br/>
                        Кто попробует, тот полюбит!
                        </p>
                    </div>
                </Link>

                <div className={styles.footerSocial}>
                    <img src={process.env.PUBLIC_URL + '/img/social-vk.svg'} alt="vk"></img>
                    <img src={process.env.PUBLIC_URL + '/img/social-ok.svg'} alt="ok"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;