import { Button } from "../../common/Button/Button";
import classnames from "classnames";
import styles from './Footer.module.css'

export const Footer = ({phoneNumber, social, ...props}) => (
  <section className={styles._}>
    <div className={styles.container}>
      <div>
        <a href="#" className={styles.socialLink}>{social}</a>
        <Button className={styles.callButton}>{phoneNumber}</Button>
      </div>
      <div>
        <p>Все права защищены</p>
      </div>
    </div>
  </section>
);