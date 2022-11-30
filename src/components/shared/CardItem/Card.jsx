import styles from './Card.module.css'
import classnames from 'classnames'

export const Card = ({itemTitle, imageSource, itemContent, itemPrice, onClick}) => {

  return (
    <a onClick={onClick} href='/card' className={styles._}>
      <h4>{itemTitle}</h4>
      <div className={styles.cardInfo}>
        <img src='https://mykaleidoscope.ru/uploads/posts/2022-06/1656114084_37-mykaleidoscope-ru-p-krasivie-sbornie-buketi-krasivo-foto-38.jpg' alt="Фото букета" className={styles.itemImage}/>
        <div className={styles.parameters}>
          <p className={styles.name}>{itemContent}</p>
          <p className={styles.price}>{itemPrice}</p>
        </div>
      </div>
    </a>
  )
}