import styles from './Header.module.css'
import classnames from 'classnames';
import { Button } from '../../common/Button/Button';
import { Icon } from '../../common/Icon/Icon';

export const Header = ({shopTitle, className, phoneNumber, icon, ...props}) => {
  const CallIcon = <Icon name='phone'/>
  const ShoppingCart = <Icon name='basket'/>
  const LogoIcon = <Icon name='logo'/>
  return (
  <section className={styles._}>
    <div className={styles.container}>
      <a href='/' className={styles.logoButton}>{LogoIcon}</a>
      <h1>
        {shopTitle}
      </h1>
      <div className={styles.navigation}>
        <Button className={classnames(styles.button, styles.callButton)} type='submit' prefix={CallIcon}>8-800-000-00-00</Button>
        <Button prefix={ShoppingCart} className={styles.cartButton}>Корзина</Button>
      </div>
    </div>
  </section>
  )};