import styles from './ProductCard.module.css'
import classnames from 'classnames'
import { Button } from '../../common/Button/Button'

export const ProductCard = ({itemTitle, imageSource, itemContent, itemPrice}) => {
  itemTitle='Первый букет цветов' ;
  itemContent='Роза, роза голубая, ветка подорожника, сухое сено' ;
  itemPrice='1000$';
  return (
    <div className={styles._}>
      <h4>{itemTitle}</h4>
      <div className={styles.cardInfo}>
        <img src='https://mykaleidoscope.ru/uploads/posts/2022-06/1656114084_37-mykaleidoscope-ru-p-krasivie-sbornie-buketi-krasivo-foto-38.jpg' alt="Фото букета" className={styles.itemImage}/>
        <div className={styles.parameters}>
          <p className={styles.name}>{itemContent}</p>
          <p className={styles.price}>{itemPrice}</p>
          <Button className={styles.Button} type='submit'>Заказать</Button>
        </div>
      </div>
    </div>
  )
}